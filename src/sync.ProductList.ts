import got from "got";
import fs from "fs";
import { where, Prefix } from "./lib";

async function main() {
  const { data } = (await got(
    `https://api.aliyun.com/api/products?type=api`
  ).json()) as any;

  const productList = data.map((it) => {
    it.endpoint = JSON.parse(it.endpoint);
    return it;
  });

  fs.writeFileSync(
    where(Prefix.src, "productList.json"),
    JSON.stringify(productList, null, 2)
  );

  const productInfo = productList
    .map((it) => {
      return {
        name: it.name.toLowerCase().replace(/-/g, "_"),
        version: it.default_version,
        endpoint: it.endpoint,
      };
    })
    .reduce((store, value) => {
      const { name, ...rest } = value;
      store[name] = rest;
      return store;
    }, {});

  fs.writeFileSync(
    where(Prefix.dist, "productInfo.json"),
    JSON.stringify(productInfo, null, 2)
  );
}

main();
