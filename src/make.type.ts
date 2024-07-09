import ts from "typescript";
import * as glob from "glob";
import fs from "fs";
import { where, Prefix } from "./lib";
import type { JSONSchema7, JSONSchema7TypeName } from "json-schema";

const tsf = ts.factory;

/**
 *  | "string"
    | "number"
    | "integer"
    | "boolean"
 */
const mapKeywordTypeNode = {
  string: tsf.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
  integer: tsf.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
  boolean: tsf.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
  number: tsf.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
  any: tsf.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
};

function handleDescription(description: string): string {
  let list = description
    .split("\n")
    .filter((it) => it.length)
    .filter((it) => !it.includes("接口说明"));

  return list.map((it) => `${it}`).join("\n * ");
}

/**
 * 特殊处理注释中的 * / 字符
 */
function escapeComment(comment: string): string {
  return comment.split("*/").join("*\u200b/");
}

/**
 * 转换 JSONSchema 到 ts 类型
 */
function convertSchemaToTsTypeNode(schema: JSONSchema7): ts.TypeNode {
  let vtype: ts.TypeNode =
    mapKeywordTypeNode[schema.type as JSONSchema7TypeName];

  if (vtype) {
    return vtype;
  }

  if (schema.type === "array") {
    const items = schema.items as JSONSchema7;
    if (items) {
      return tsf.createArrayTypeNode(convertSchemaToTsTypeNode(items));
    }
    return tsf.createArrayTypeNode(
      tsf.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
    );
  } else if (schema.type === "object") {
    const props = schema.properties!;
    if (props) {
      const members = Object.keys(props).map((keyName) => {
        const item = props[keyName] as JSONSchema7;
        const ps = tsf.createPropertySignature(
          undefined,
          tsf.createIdentifier(keyName),
          undefined,
          convertSchemaToTsTypeNode(item)
        );

        let comment = "";
        if (item.description) {
          comment += handleDescription(item.description);
        }

        // @ts-ignore
        if (item.example) {
          // @ts-ignore
          comment += `\n * @example \`${item.example}\``;
        }
        if (comment.length) {
          ts.addSyntheticLeadingComment(
            ps,
            ts.SyntaxKind.MultiLineCommentTrivia,
            `*\n * ${escapeComment(comment)}\n `,
            true
          );
        }

        return ps;
      });

      return tsf.createTypeLiteralNode(members);
    } else {
      return tsf.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
    }
  }

  return tsf.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
}

function makeRequestPropertySignature(
  apiData: ApiDefine
): ts.PropertySignature[] {
  const ret: ts.PropertySignature[] = [];
  const set = new Set<string>();
  for (const param of apiData.parameters) {
    if (set.has(param.name)) {
      continue;
    }
    set.add(param.name);
    let vtype: ts.TypeNode = convertSchemaToTsTypeNode(param.schema);

    /**
     *  interface DescribeInstancesRequest {
     *    "RegionId": string;
     *  }
     *
     * 构建类型中的
     * "RegionId": string
     * 
     * 请求参数中，存在 `Filter.1.Key` 这种 key，这里先统一加上引号做处理
     */
    const ps = tsf.createPropertySignature(
      /*modifiers*/ undefined,
      tsf.createStringLiteral(param.name),
      /*questionToken*/ param.schema.required
        ? undefined
        : tsf.createToken(ts.SyntaxKind.QuestionToken),
      /*type*/ vtype
    );

    let comment = "";
    if (param.schema.description) {
      comment += handleDescription(param.schema.description);
    }

    // @ts-ignore
    if (param.schema.example) {
      // @ts-ignore
      comment += `\n * @example \`${param.schema.example}\``;
    }
    if (comment.length) {
      ts.addSyntheticLeadingComment(
        ps,
        ts.SyntaxKind.MultiLineCommentTrivia,
        `*\n * ${escapeComment(comment)}\n `,
        true
      );
    }

    ret.push(ps);
  }

  return ret;
}

/**
 * 构建出
 * interface ECS {
 *   RunInstances(query: RunInstancesRequest): Promise<RunInstancesResponse>;
 * }
 * 中的
 * RunInstances(query: RunInstancesRequest): Promise<RunInstancesResponse>
 * 这个部分
 *
 * 生成包含请求与返回值类型的文件
 */
function makeMethodSignature(
  apiName: string,
  apiData: ApiDefine,
  product: string
): ts.MethodSignature {
  console.log(`${product} - ${apiName}`);
  makeRequest(product, apiName, apiData);
  makeResponse(product, apiName, apiData);

  const ms = tsf.createMethodSignature(
    undefined,
    tsf.createIdentifier(apiName),
    undefined,
    undefined,
    [
      tsf.createParameterDeclaration(
        undefined,
        undefined,
        tsf.createIdentifier("query"),
        undefined,
        tsf.createTypeReferenceNode(
          tsf.createIdentifier(`${apiName}Request`),
          undefined
        ),
        undefined
      ),
    ],
    tsf.createTypeReferenceNode(tsf.createIdentifier("Promise"), [
      tsf.createTypeReferenceNode(
        tsf.createIdentifier(`${apiName}Response`),
        undefined
      ),
    ])
  );

  let comment = "";
  if (apiData.summary) {
    comment += handleDescription(apiData.summary);
  }
  if (comment.length) {
    ts.addSyntheticLeadingComment(
      ms,
      ts.SyntaxKind.MultiLineCommentTrivia,
      `*\n * ${comment}\n `,
      true
    );
  }
  return ms;
}

/**
 * 创建每个产品的类型声明
 *  interface ECS {
 *    RunInstances(query: RunInstancesRequest): Promise<RunInstancesResponse>;
 *    CreateHpcCluster(query: CreateHpcClusterRequest): Promise<CreateHpcClusterResponse>;
 *  }
 */
function makeInterfaceDeclaration(name: string, msList: ts.MethodSignature[]) {
  return tsf.createInterfaceDeclaration(
    undefined,
    tsf.createIdentifier(name.toUpperCase()),
    undefined,
    undefined,
    msList
  );
}

/**
 *
 * @param {string} name
 */
function makeExport(name: string) {
  return tsf.createExportAssignment(
    undefined,
    undefined,
    tsf.createIdentifier(name.toUpperCase())
  );
}

/**
 *  import ECS from "./ecs";
 *  interface API {
 *    ecs: ECS;
 *  }
 *  declare const api: API;
 *  interface Config {
 *      accessKeyId: string;
 *      accessKeySecret: string;
 *  }
 *  export function hostConfig(config: Config): API;
 *  export default api;
 */
function makeApibundle(list: string[]): ts.Node[] {
  // declare const api: API;
  const constVarApi = tsf.createVariableStatement(
    [tsf.createToken(ts.SyntaxKind.DeclareKeyword)],
    tsf.createVariableDeclarationList(
      [
        tsf.createVariableDeclaration(
          tsf.createIdentifier("api"),
          undefined,
          tsf.createTypeReferenceNode(tsf.createIdentifier("API"), undefined),
          undefined
        ),
      ],
      ts.NodeFlags.Const
    )
  );
  // export default api;
  const exportVarApi = tsf.createExportAssignment(
    undefined,
    undefined,
    tsf.createIdentifier("api")
  );

  //  interface API {
  //    ecs: ECS;
  //  }
  const interfaceApi = tsf.createInterfaceDeclaration(
    undefined,
    tsf.createIdentifier("API"),
    undefined,
    undefined,
    list.map((name) =>
      tsf.createPropertySignature(
        undefined,
        tsf.createIdentifier(name),
        undefined,
        tsf.createTypeReferenceNode(
          tsf.createIdentifier(name.toUpperCase()),
          undefined
        )
      )
    )
  );

  // import ECS from "./ecs";
  const importApi = list.map((name) =>
    tsf.createImportDeclaration(
      undefined,
      tsf.createImportClause(
        false,
        tsf.createIdentifier(name.toUpperCase()),
        undefined
      ),
      tsf.createStringLiteral(`./${name}`),
      undefined
    )
  );

  //  interface Config {
  //    accessKeyId: string;
  //    accessKeySecret: string;
  //  }
  const interfaceConfig = tsf.createInterfaceDeclaration(
    undefined,
    tsf.createIdentifier("Config"),
    undefined,
    undefined,
    [
      tsf.createPropertySignature(
        undefined,
        tsf.createIdentifier("accessKeyId"),
        undefined,
        tsf.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
      ),
      tsf.createPropertySignature(
        undefined,
        tsf.createIdentifier("accessKeySecret"),
        undefined,
        tsf.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
      ),
    ]
  );

  // export function hostConfig(config: Config): API;
  const hostConfig = tsf.createFunctionDeclaration(
    [tsf.createToken(ts.SyntaxKind.ExportKeyword)],
    undefined,
    tsf.createIdentifier("hostConfig"),
    undefined,
    [
      tsf.createParameterDeclaration(
        undefined,
        undefined,
        tsf.createIdentifier("config"),
        undefined,
        tsf.createTypeReferenceNode(tsf.createIdentifier("Config"), undefined),
        undefined
      ),
    ],
    tsf.createTypeReferenceNode(tsf.createIdentifier("API"), undefined),
    undefined
  );

  return [
    ...importApi,
    interfaceApi,
    constVarApi,
    interfaceConfig,
    hostConfig,
    exportVarApi,
  ];
}

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
  removeComments: false,
});
const resultFile = ts.createSourceFile(
  "",
  "",
  ts.ScriptTarget.Latest,
  /*setParentNodes*/ false,
  ts.ScriptKind.TS
);

function makeRequest(product: string, apiName: string, apiData: ApiDefine) {
  const requestFileName = where(Prefix.dist, product, apiName, "req.d.ts");

  const def = tsf.createInterfaceDeclaration(
    [tsf.createToken(ts.SyntaxKind.ExportKeyword)],
    tsf.createIdentifier(`${apiName}Request`),
    undefined,
    undefined,
    makeRequestPropertySignature(apiData)
  );

  const requestExport = printer.printNode(
    ts.EmitHint.Unspecified,
    def,
    resultFile
  );

  fs.writeFileSync(requestFileName, `${requestExport}\n`);
}

function makeResponse(product: string, apiName: string, apiData: ApiDefine) {
  const responseFileName = where(Prefix.dist, product, apiName, "res.d.ts");

  // 某些特殊的接口，没有返回值
  // 例如 pds - Authorize
  if (!apiData.responses[200]) {
    const def = tsf.createTypeAliasDeclaration(
      [tsf.createToken(ts.SyntaxKind.ExportKeyword)],
      tsf.createIdentifier(`${apiName}Response`),
      undefined,
      tsf.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
    );

    const responseExport = printer.printNode(
      ts.EmitHint.Unspecified,
      def,
      resultFile
    );

    fs.writeFileSync(responseFileName, `${responseExport}\n`);

    return;
  }

  const props = apiData.responses[200].schema;

  // 某些特殊的接口，似乎是走 header 返回数据
  // 例如 sls - ApplyConfigToMachineGroup
  if (!props) {
    const def = tsf.createTypeAliasDeclaration(
      [tsf.createToken(ts.SyntaxKind.ExportKeyword)],
      tsf.createIdentifier(`${apiName}Response`),
      undefined,
      tsf.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
    );

    const responseExport = printer.printNode(
      ts.EmitHint.Unspecified,
      def,
      resultFile
    );

    fs.writeFileSync(responseFileName, `${responseExport}\n`);

    return;
  }

  // 大部分情况下，返回值都是一个对象
  // 少部分 api 似乎会返回一个数组，例如 sls - GetCheckPoint
  if (props.type === "array") {
    const def = tsf.createTypeAliasDeclaration(
      [tsf.createToken(ts.SyntaxKind.ExportKeyword)],
      tsf.createIdentifier(`${apiName}Response`),
      undefined,
      convertSchemaToTsTypeNode(props)
    );

    const responseExport = printer.printNode(
      ts.EmitHint.Unspecified,
      def,
      resultFile
    );

    fs.writeFileSync(responseFileName, `${responseExport}\n`);

    return;
  }

  // 少部分接口定义中使用了 "$ref": "#/components/schemas/LogtailConfig"
  // 例如 sls - GetConfig
  if (typeof props.$ref === "string" && props.$ref.length) {
    const def = tsf.createTypeAliasDeclaration(
      [tsf.createToken(ts.SyntaxKind.ExportKeyword)],
      tsf.createIdentifier(`${apiName}Response`),
      undefined,
      tsf.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
    );

    const responseExport = printer.printNode(
      ts.EmitHint.Unspecified,
      def,
      resultFile
    );

    fs.writeFileSync(responseFileName, `${responseExport}\n`);

    return;
  }

  // 有的接口返回值就是一个 string
  // 例如 sls - GetProjectPolicy
  if (props.type === "string") {
    const def = tsf.createTypeAliasDeclaration(
      [tsf.createToken(ts.SyntaxKind.ExportKeyword)],
      tsf.createIdentifier(`${apiName}Response`),
      undefined,
      convertSchemaToTsTypeNode(props)
    );

    const responseExport = printer.printNode(
      ts.EmitHint.Unspecified,
      def,
      resultFile
    );

    fs.writeFileSync(responseFileName, `${responseExport}\n`);

    return;
  }

  let members: ts.PropertySignature[];

  // 有一部分接口，返回值没有具体的类型定义
  // 例如 eiam_developerapi - GetUserInfo
  // 所以这里需要判断是否存在 prop
  if (props.properties) {
    members = Object.keys(props.properties).map((keyName) => {
      const item = props.properties[keyName] as JSONSchema7;
      const ps = tsf.createPropertySignature(
        undefined,
        tsf.createIdentifier(keyName),
        undefined,
        convertSchemaToTsTypeNode(item)
      );

      let comment = "";
      if (item.description) {
        comment += handleDescription(item.description);
      }

      // @ts-ignore
      if (item.example) {
        // @ts-ignore
        comment += `\n * @example \`${item.example}\``;
      }
      if (comment.length) {
        ts.addSyntheticLeadingComment(
          ps,
          ts.SyntaxKind.MultiLineCommentTrivia,
          `*\n * ${escapeComment(comment)}\n `,
          true
        );
      }

      return ps;
    });
  }

  const def = tsf.createInterfaceDeclaration(
    [tsf.createToken(ts.SyntaxKind.ExportKeyword)],
    tsf.createIdentifier(`${apiName}Response`),
    undefined,
    undefined,
    members
  );

  const responseExport = printer.printNode(
    ts.EmitHint.Unspecified,
    def,
    resultFile
  );

  fs.writeFileSync(responseFileName, `${responseExport}\n`);
}

// 生成 import { typeName } from "fileName"
function makeImport(typeName: string, fileName: string) {
  return printer.printNode(
    ts.EmitHint.Unspecified,
    tsf.createImportDeclaration(
      undefined,
      tsf.createImportClause(
        false,
        undefined,
        tsf.createNamedImports([
          tsf.createImportSpecifier(
            false,
            undefined,
            tsf.createIdentifier(typeName)
          ),
        ])
      ),
      tsf.createStringLiteral(fileName),
      undefined
    ),
    resultFile
  );
}

function makeReqResImport(apiName: string): string {
  const req = makeImport(`${apiName}Request`, `./${apiName}/req`);
  const res = makeImport(`${apiName}Response`, `./${apiName}/res`);
  return `${req}\n${res}\n`;
}

interface ApiListItem {
  name: string;
  summary: string;
  title: string;
  hidden: number;
  children: ApiListItem[];
}

interface ApiDefine {
  parameters: {
    name: string;
    schema: JSONSchema7;
  }[];
  responses: {
    200: {
      schema: JSONSchema7;
    };
  };
  title: string;
  summary: string;
  description: string;
}

function buildApiType(
  product: string,
  typeImport: string[],
  apiList: ApiListItem[],
  msList: ts.MethodSignature[]
) {
  for (const apiItem of apiList) {
    const { name: apiName, hidden } = apiItem;

    if (hidden === -1) {
      console.log(`[skip][hidden] ${product} - ${apiName}`);
      continue;
    }
    if (typeof apiName !== "string") {
      if (Array.isArray(apiItem.children) && apiItem.children.length) {
        buildApiType(product, typeImport, apiItem.children, msList);
      }
      continue;
    }

    const fileName = where(Prefix.doc, product, apiName + ".json");
    if (fs.existsSync(fileName)) {
      fs.mkdirSync(where(Prefix.dist, product, apiName), {
        recursive: true,
      });
      const apiString = fs.readFileSync(fileName, { encoding: "utf8" });
      const apiData: ApiDefine = JSON.parse(apiString);
      msList.push(makeMethodSignature(apiName, apiData, product));
      typeImport.push(makeReqResImport(apiName));
    } else {
      console.error("[缺少] - ", fileName);
      process.exit(1);
    }
  }
}

function makeProduct() {
  const apiLists = glob.sync(where(Prefix.doc, "**/list.json"), {
    posix: true,
  });
  const productList: string[] = [];

  apiLists.forEach((apiFile) => {
    const s = apiFile.split("/");
    const product = s[s.length - 2];
    productList.push(product);
    console.log("read ", apiFile);
    const apiFileContent = fs.readFileSync(apiFile, { encoding: "utf8" });

    const apiList: ApiListItem[] = JSON.parse(apiFileContent);

    fs.mkdirSync(where(Prefix.dist, product), { recursive: true });
    const msList: ts.MethodSignature[] = [];

    let typeImport: string[] = [];

    buildApiType(product, typeImport, apiList, msList);

    const result = printer.printNode(
      ts.EmitHint.Unspecified,
      makeInterfaceDeclaration(product, msList),
      resultFile
    );
    const varExport = printer.printNode(
      ts.EmitHint.Unspecified,
      makeExport(product),
      resultFile
    );
    fs.writeFileSync(
      where(Prefix.dist, product, "index.d.ts"),
      `${typeImport.join("")}\n${result}\n${varExport}\n`
    );
  });

  const apibundle = makeApibundle(productList)
    .map((ast) => printer.printNode(ts.EmitHint.Unspecified, ast, resultFile))
    .join("\n");
  fs.writeFileSync(where(Prefix.dist, "index.d.ts"), `${apibundle}\n`);
}

makeProduct();
