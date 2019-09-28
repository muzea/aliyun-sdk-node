const fs = require('fs');
const { where, Prefix } = require('./lib');
const productList = require('./products.js');

const productInfo = productList
  .map(it => {
    return {
      name: it.name.toLowerCase().replace(/-/g, '_'),
      version: it.version,
      endpoint: it.endpoint
    };
  })
  .reduce((store, value) => {
    const { name, ...rest } = value;
    store[name] = rest;
    return store;
  }, {});

fs.writeFileSync(where(Prefix.dist, 'productInfo.json'), JSON.stringify(productInfo, null, 2));
