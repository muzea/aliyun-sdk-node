import got from "got";
import * as glob from "glob";
import fs from "fs";
import { where, Prefix } from "./lib";

async function fetchProduct() {
  let productList = JSON.parse(
    fs.readFileSync(where(Prefix.src, "productList.json"), {
      encoding: "utf8",
    })
  );
  productList = productList.map((it) => {
    return {
      ...it,
      name: it.name.toLowerCase(),
    };
  });

  for (const product of productList) {
    const filePath = product.name.replace(/-/g, "_");
    fs.mkdirSync(where(Prefix.doc, filePath), { recursive: true });

    console.log(
      `fetch https://api.aliyun.com/api/product/apis?product=${product.name}&version=${product.default_version}`
    );
    const apiList = await got(
      `https://api.aliyun.com/api/product/apis?product=${product.name}&version=${product.default_version}`
    )
      .json()
      .then((resp: any) => resp.data);

    fs.writeFileSync(
      where(Prefix.doc, filePath, "list.json"),
      JSON.stringify(apiList)
    );
  }
}

function upper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function _fetchApi(product: string, apiList: any[]) {
  for (const apiItem of apiList) {
    const apiName = apiItem.name;
    if (typeof apiName !== "string") {
      if (Array.isArray(apiItem.children) && apiItem.children.length) {
        await _fetchApi(product, apiItem.children);
      }
      continue;
    }

    const productName = product.replace(/_/g, "-");
    console.log(
      "fetch",
      product,
      `https://api.aliyun.com/meta/v1/products/${productName}/versions/${apiItem.version}/apis/${apiName}/api`
    );
    const apiDefine = await got(
      `https://api.aliyun.com/meta/v1/products/${productName}/versions/${apiItem.version}/apis/${apiName}/api`,
      { timeout: 5000 }
    )
      .json()
      .then((resp: any) => resp.data);

    fs.writeFileSync(
      where(Prefix.doc, product, apiName + ".json"),
      JSON.stringify(apiDefine)
    );
  }
}

async function fetchApi() {
  const apiLists = glob.sync(where(Prefix.doc, "/**/list.json"), {
    posix: true,
  });

  for (const apiFile of apiLists) {
    const s = apiFile.split("/");
    const product = s[s.length - 2];
    console.log(`update ${product} api`);
    const apiFileContent = fs.readFileSync(apiFile, { encoding: "utf8" });

    const apiList = JSON.parse(apiFileContent);
    if (!Array.isArray(apiList)) {
      console.log(product, " list.json data format error ", apiFileContent);
      continue;
    }

    await _fetchApi(product, apiList);
  }
}

async function main() {
  await fetchProduct();
  await fetchApi();
}

main();
