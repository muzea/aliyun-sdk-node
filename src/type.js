const ts = require('typescript');
const glob = require('glob');
const fs = require('fs');
const { execSync } = require('child_process');
const cheerio = require('cheerio');
const { where, Prefix } = require('./lib');

/**
 *
 * @param {string} k
 * @param {Object} v
 */
function isArray(k, v) {
  if (!k.endsWith('s')) return false;
  const kl = k.length;
  const keys = Object.keys(v);
  if (keys.length === 0) return false;
  const sk = keys[0];
  const skl = sk.length;
  const mb = kl === skl + 1 || kl === skl + 2;
  if (!mb) return false;
  return k.startsWith(sk);
}

function handleValue(key, value) {
  // if (isArray(key, value)) {
  //   return ts.createArrayTypeNode(getTypeFromObject(value));
  // }
  if (Array.isArray(value) && value.every(it => typeof it === typeof value[0])) {
    if (value.length === 0) {
      return ts.createArrayTypeNode(ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword));
    }
    vtype = mapJSTypeNode[typeof value[0]];
    if (vtype) {
      return ts.createArrayTypeNode(vtype);
    }
    if (typeof value[0] === 'object') {
      return ts.createArrayTypeNode(getTypeFromObject(value[0]));
    }
    throw new Error('[getTypeFromObject] 未知类型 ' + JSON.stringify(value));
  }
  if (typeof value === 'object') {
    return getTypeFromObject(value);
  }
  throw new Error('[getTypeFromObject] 未知类型 ' + JSON.stringify(value));
}

function getTypeFromObject(obj) {
  if (obj === undefined || obj === null) {
    return ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
  }
  const keys = Object.keys(obj);
  if (keys.length === 1 && keys[0].endsWith('Response')) {
    return getTypeFromObject(obj[keys[0]]);
  }
  return ts.createTypeLiteralNode(
    keys.map(key => {
      const t = typeof obj[key];
      let vtype = mapJSTypeNode[t];
      if (vtype === undefined) {
        vtype = handleValue(key, obj[key]);
      }
      const ps = ts.createPropertySignature(
        /*modifiers*/ undefined,
        ts.createStringLiteral(key),
        /*questionToken*/ undefined,
        /*type*/ vtype,
        /*initializer*/ undefined
      );
      return ps;
    })
  );
}

function getTypeFromObjectNoWrap(obj) {
  if (obj === undefined || obj === null) {
    return ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
  }
  const keys = Object.keys(obj);
  if (keys.length === 1 && keys[0].endsWith('Response')) {
    return getTypeFromObject(obj[keys[0]]);
  }
  return keys.map(key => {
    const t = typeof obj[key];
    let vtype = mapJSTypeNode[t];
    if (vtype === undefined) {
      vtype = handleValue(key, obj[key]);
    }
    const ps = ts.createPropertySignature(
      /*modifiers*/ undefined,
      ts.createStringLiteral(key),
      /*questionToken*/ undefined,
      /*type*/ vtype,
      /*initializer*/ undefined
    );
    return ps;
  });
}

const mapKeywordTypeNode = {
  String: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
  Json: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
  Long: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
  Boolean: ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
  Integer: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
  Float: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
};

const mapJSTypeNode = {
  string: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
  number: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
  boolean: ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)
};

/**
 *
 * @param {string} description
 */
function handleDescription(description) {
  let list = description.split('\n').filter(it => it.length);
  const hasChinaProps = list.some(it => it.includes('props') && it.includes('china'));
  if (hasChinaProps) {
    list = list.map(it => {
      const $ = cheerio.load(it);
      const elements = $('*');
      let i = 0;
      const end = elements.length;
      while(i < end) {
        const element = elements[i];
        if (element.tagName.startsWith('props') && !element.tagName.includes('china')) {
          $(element).text('');
        }
        ++i;
      }
      return $.text();
    });
  }
  return list.map(it => `\n* ${it}`).join('');
}

/**
 *
 * @param {string} comment
 */
function escapeComment(comment) {
  return comment.split('*/').join('*\u200b/');
}

function makePropertySignature(params) {
  const keys = Object.keys(params);
  return keys.map(key => {
    const param = params[key];
    let vtype = mapKeywordTypeNode[param.type];
    if (vtype === undefined) {
      if (param.type === 'RepeatList') {
        const subType = mapKeywordTypeNode[param.subType];
        if (subType) {
          vtype = ts.createArrayTypeNode(subType);
        } else {
          vtype = ts.createArrayTypeNode(getTypeFromFormat(param.params));
        }
      } else if (param.params) {
        vtype = getTypeFromFormat(param.params);
      } else {
        vtype = ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
        // throw new Error('未知类型 ' + JSON.stringify(param));
      }
    }
    const ps = ts.createPropertySignature(
      /*modifiers*/ undefined,
      ts.createStringLiteral(key),
      /*questionToken*/ param.required ? undefined : ts.createToken(ts.SyntaxKind.QuestionToken),
      /*type*/ vtype,
      /*initializer*/ undefined
    );
    let comment = '';
    if (param.description_cn) {
      comment += handleDescription(param.description_cn);
    }
    if (param.example_cn) {
      comment += `\n* @example \`${param.example_cn}\``;
    }
    if (comment.length) {
      ts.addSyntheticLeadingComment(ps, ts.SyntaxKind.MultiLineCommentTrivia, `*${escapeComment(comment)}\n`);
    }
    return ps;
  });
}

/**
 *
 * @param {{[k: string]: Object}} format
 */
function getTypeFromFormat(format) {
  return ts.createTypeLiteralNode(makePropertySignature(format));
}

/**
 *
 * @param {{ name: string; reqFormat: Object, res: Object; summary_cn: string; }} apiData
 */
function makeMethodSignature(apiData, product) {
  makeRequest(product, apiData.name, apiData);
  makeResponse(product, apiData.name, apiData);
  const ms = ts.createMethodSignature(
    undefined,
    [
      ts.createParameter(
        undefined,
        undefined,
        undefined,
        ts.createIdentifier('query'),
        undefined,
        // getTypeFromFormat(apiData.reqFormat),
        ts.createTypeReferenceNode(ts.createIdentifier(`${apiData.name}Request`), undefined),
        undefined
      )
    ],
    // ts.createTypeReferenceNode(ts.createIdentifier('Promise'), [getTypeFromObject(apiData.res)]),
    ts.createTypeReferenceNode(ts.createIdentifier('Promise'), [
      ts.createTypeReferenceNode(ts.createIdentifier(`${apiData.name}Response`), undefined)
    ]),
    ts.createIdentifier(apiData.name),
    undefined
  );
  let comment = '';
  if (apiData.summary_cn) {
    comment += handleDescription(apiData.summary_cn);
  }
  if (comment.length) {
    ts.addSyntheticLeadingComment(ms, ts.SyntaxKind.MultiLineCommentTrivia, `*${escapeComment(comment)}\n`);
  }
  return ms;
}

/**
 *
 * @param {string} name
 * @param {*} msList
 */
function makeInterfaceDeclaration(name, msList) {
  return ts.createInterfaceDeclaration(undefined, undefined, ts.createIdentifier(name.toUpperCase()), undefined, undefined, msList);
}

/**
 *
 * @param {string} name
 */
function makeExport(name) {
  return ts.createExportAssignment(undefined, undefined, undefined, ts.createIdentifier(name.toUpperCase()));
}

/**
 *
 * @param {string[]} list
 */
function makeApibundle(list) {
  const constVarApi = ts.createVariableStatement(
    undefined,
    ts.createVariableDeclarationList(
      [
        ts.createVariableDeclaration(
          ts.createIdentifier('api'),
          ts.createTypeReferenceNode(ts.createIdentifier('API'), undefined),
          undefined
        )
      ],
      ts.NodeFlags.Const
    )
  );
  const exportVarApi = ts.createExportAssignment(undefined, undefined, undefined, ts.createIdentifier('api'));
  const interfaceApi = ts.createInterfaceDeclaration(
    undefined,
    undefined,
    ts.createIdentifier('API'),
    undefined,
    undefined,
    list.map(name =>
      ts.createPropertySignature(
        undefined,
        ts.createIdentifier(name),
        undefined,
        ts.createTypeReferenceNode(ts.createIdentifier(name.toUpperCase()), undefined),
        undefined
      )
    )
  );
  const importApi = list.map(name =>
    ts.createImportDeclaration(
      undefined,
      undefined,
      ts.createImportClause(ts.createIdentifier(name.toUpperCase()), undefined),
      ts.createStringLiteral(`./${name}`)
    )
  );
  const interfaceConfig = ts.createInterfaceDeclaration(undefined, undefined, ts.createIdentifier('Config'), undefined, undefined, [
    ts.createPropertySignature(
      undefined,
      ts.createIdentifier('accessKeyId'),
      undefined,
      ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      undefined
    ),
    ts.createPropertySignature(
      undefined,
      ts.createIdentifier('accessKeySecret'),
      undefined,
      ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      undefined
    )
  ]);
  const hostConfig = ts.createFunctionDeclaration(
    undefined,
    [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
    undefined,
    ts.createIdentifier('hostConfig'),
    undefined,
    [
      ts.createParameter(
        undefined,
        undefined,
        undefined,
        ts.createIdentifier('config'),
        undefined,
        ts.createTypeReferenceNode(ts.createIdentifier('Config'), undefined),
        undefined
      )
    ],
    ts.createTypeReferenceNode(ts.createIdentifier('API'), undefined),
    undefined
  );
  return importApi.concat(interfaceApi, constVarApi, interfaceConfig, hostConfig, exportVarApi);
}

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
  removeComments: false
});
const resultFile = ts.createSourceFile('', '', ts.ScriptTarget.Latest, /*setParentNodes*/ false, ts.ScriptKind.TS);

function makeRequest(product, apiName, apiData) {
  const requestFileName = where(Prefix.dist, product, apiName, 'req.d.ts');
  const def = printer.printNode(
    ts.EmitHint.Unspecified,
    ts.createInterfaceDeclaration(undefined, undefined, ts.createIdentifier(`${apiName}Request`), undefined, undefined, makePropertySignature(apiData.reqFormat)),
    resultFile
  );
  const exp = printer.printNode(
    ts.EmitHint.Unspecified,
    ts.createExportDeclaration(
      undefined,
      undefined,
      ts.createNamedExports([ts.createExportSpecifier(undefined, ts.createIdentifier(`${apiName}Request`))]),
      undefined
    ),
    resultFile
  );
  fs.writeFileSync(requestFileName, `${def}\n${exp}`);
}

const githubPrefix = 'github.com/aliyun/alibaba-cloud-sdk-go/services';

function makeResponse(product, apiName, apiData) {
  const responseFileName = where(Prefix.dist, product, apiName, 'res.d.ts');
  const responseType = execSync(`struct2ts -i -H ${githubPrefix}/${product}.${apiName}Response`, {
    encoding: 'utf8',
    maxBuffer: 1024 * 1024 * 1024
  });
  if (responseType && responseType.length) {
    fs.writeFileSync(responseFileName, responseType);
    return;
  }
  const def = printer.printNode(
    ts.EmitHint.Unspecified,
    ts.createInterfaceDeclaration(undefined, undefined, ts.createIdentifier(`${apiName}Response`), undefined, undefined, getTypeFromObjectNoWrap(apiData.res)),
    resultFile
  );
  const exp = printer.printNode(
    ts.EmitHint.Unspecified,
    ts.createExportDeclaration(
      undefined,
      undefined,
      ts.createNamedExports([ts.createExportSpecifier(undefined, ts.createIdentifier(`${apiName}Response`))]),
      undefined
    ),
    resultFile
  );
  fs.writeFileSync(responseFileName, `${def}\n${exp}`);
}

function makeImport(typeName, fileName) {
  return printer.printNode(
    ts.EmitHint.Unspecified,
    ts.createImportDeclaration(
      undefined,
      undefined,
      ts.createImportClause(undefined, ts.createNamedImports([ts.createImportSpecifier(undefined, ts.createIdentifier(typeName))])),
      ts.createStringLiteral(fileName)
    ),
    resultFile
  );
}

function makeReqResImport(apiName) {
  const req = makeImport(`${apiName}Request`, `./${apiName}/req`);
  const res = makeImport(`${apiName}Response`, `./${apiName}/res`);
  return `${req}\n${res}\n`;
}

function makeProduct() {
  const apiLists = glob.sync(where(Prefix.doc, '/**/list.json'));
  /**
   * @type {string[]}
   */
  const productList = [];
  apiLists.forEach(apiFile => {
    const s = apiFile.split('/');
    const product = s[s.length - 2];
    productList.push(product);
    const apiFileContent = fs.readFileSync(apiFile, { encoding: 'utf8' });
    /**
     * @type {{ data: { api: Object } }}
     */
    const apiList = JSON.parse(apiFileContent);
    const apiData = apiList.data.api;
    fs.mkdirSync(where(Prefix.dist, product), { recursive: true });
    const msList = [];
    const apiNameList = Object.keys(apiData);
    let typeImport = '';
    apiNameList.forEach(apiName => {
      const fileName = where(Prefix.doc, product, apiName + '.json');
      if (fs.existsSync(fileName)) {
        fs.mkdirSync(where(Prefix.dist, product, apiName), { recursive: true });
        const apiString = fs.readFileSync(fileName, { encoding: 'utf8' });
        const apiData = JSON.parse(apiString);
        msList.push(makeMethodSignature(apiData, product));
        typeImport += makeReqResImport(apiName);
      } else {
        console.error('[缺少] - ', fileName);
      }
    });
    const result = printer.printNode(ts.EmitHint.Unspecified, makeInterfaceDeclaration(product, msList), resultFile);
    const varExport = printer.printNode(ts.EmitHint.Unspecified, makeExport(product), resultFile);
    fs.writeFileSync(where(Prefix.dist, product, 'index.d.ts'), `${typeImport}\n${result}\n${varExport}\n`);
    // throw new Error('stop');
  });
  const apibundle = makeApibundle(productList)
    .map(ast => printer.printNode(ts.EmitHint.Unspecified, ast, resultFile))
    .join('\n');
  fs.writeFileSync(where(Prefix.dist, 'index.d.ts'), `${apibundle}\n`);
}

makeProduct();
