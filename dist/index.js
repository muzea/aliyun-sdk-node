const Util = require("@alicloud/tea-util");
const OpenApi = require("@alicloud/openapi-client");
const OpenApiUtil = require("@alicloud/openapi-util");
const productInfo = require("./productInfo.json");

/**
 * @param {string} name
 * @returns {{ version: string; endpoint: string }}
 */
function getProductData(name) {
  const info = productInfo[name];
  if (info === undefined) {
    throw new Error(`没有${name}的相关产品信息`);
  }
  const version = info.version;
  let endpoint = info.endpoint.default;
  if (endpoint === undefined) {
    endpoint = info.endpoint[Object.keys(info.endpoint)[0]];
  }
  return {
    version,
    endpoint,
  };
}

function request(product, apiName, query, apiOpts) {
  let req = new OpenApi.OpenApiRequest({
    query: OpenApiUtil.default.query(query),
  });
  let params = new OpenApi.Params({
    action: apiName,
    version: product.version,
    protocol: "HTTPS",
    pathname: "/",
    method: "POST",
    authType: "AK",
    style: "RPC",
    reqBodyType: "formData",
    bodyType: "json",
  });

  let runtime = new Util.RuntimeOptions({});

  return product.client.callApi(params, req, runtime).then((resp) => resp.body);
}

function makeProduct(name, clientConfig, opts) {
  const info = getProductData(name);
  if (clientConfig.endpoint) {
    info.endpoint = clientConfig.endpoint;
  }

  const config = new OpenApi.Config({
    ...clientConfig,
    accessKeyId: clientConfig.accessKeyId,
    accessKeySecret: clientConfig.accessKeySecret,
    endpoint: info.endpoint,
  });
  const client = new OpenApi.default(config);

  return new Proxy(
    {
      product: name,
      endpoint: info.endpoint,
      version: info.version,
      client,
    },
    {
      get: function (product, apiName) {
        if (!product.hasOwnProperty(apiName)) {
          product[apiName] = function (params, apiOpts) {
            return request(product, apiName, params, apiOpts);
          };
        }
        return product[apiName];
      },
    }
  );
}

function hostConfig(clientConfig = {}, opts = {}) {
  return new Proxy(
    {},
    {
      get: function (api, productName) {
        if (!api.hasOwnProperty(productName)) {
          api[productName] = makeProduct(productName, clientConfig, opts);
        }
        return api[productName];
      },
    }
  );
}

module.exports = {
  hostConfig,
};
