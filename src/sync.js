const got = require('got');
const glob = require('glob');
const fs = require('fs');
const { where, Prefix } = require('./lib');
let productList = require('./products.js');

productList = productList.map(it => {
  return {
    ...it,
    name: it.name.toLowerCase()
  };
});

function fetchProduct() {
  productList.forEach(async product => {
    const filePath = product.name.replace(/-/g, '_');
    fs.mkdirSync(where(Prefix.doc, filePath), { recursive: true });
    const apiList = await got(
      `https://api.aliyun.com/api/product/describeApiWithDocList.json?productName=${product.name}&productVersion=${product.version}`
    ).then(data => data.body);
    fs.writeFileSync(where(Prefix.doc, filePath, 'list.json'), apiList);
  });
}

function upper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function fetchApi() {
  const apiLists = glob.sync(where(Prefix.doc, '/**/list.json'));
  apiLists.forEach(async apiFile => {
    const s = apiFile.split('/');
    const product = s[s.length - 2];
    const apiFileContent = fs.readFileSync(apiFile, { encoding: 'utf8' });
    /**
     * @type {{ data: { api: Object } }}
     */
    const apiList = JSON.parse(apiFileContent);
    const apiData = apiList.data.api;
    if (typeof apiData !== 'object') {
      console.log(product, ' why ', apiFileContent);
      return;
    }
    const keys = Object.keys(apiData);
    for (const apiName of keys) {
      console.log(`[api] ${product} - ${apiName} start`);
      const mockString = await got(
        `https://api.aliyun.com/mock/api/getApiData.json?projectId=${upper(product.replace(/_/g, '-'))}&api=${apiName}`,
        { timeout: 5000 }
      ).then(data => data.body);
      console.log(`[api] ${product} - ${apiName} done`);
      /**
       * @type {{ data: Array<{ name: string; resData: Object; }> }}
       */
      const mockData = JSON.parse(mockString);
      let res = {};
      if (mockData && Array.isArray(mockData.data)) {
        const found = mockData.data.find(it => it.name === 'default');
        res = found ? found.resData : {};
      }
      const { params, ...rest } = apiData[apiName];
      const output = {
        ...rest,
        reqFormat: params,
        res
      };
      fs.writeFileSync(where(Prefix.doc, product, apiName + '.json'), JSON.stringify(output, null, 2));
    }
  });
}

const cmd = process.argv[2];

switch (cmd) {
  case 'product':
  case 'p': {
    fetchProduct();
    break;
  }
  case 'api':
  case 'a': {
    fetchApi();
    break;
  }
  default: {
    console.log('error cmd ', cmd);
  }
}
