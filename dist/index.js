const assert = require('assert');
const got = require('got');
const kitx = require('kitx');
const JSON = require('json-bigint');
const productInfo = require('./productInfo.json');

function firstLetterUpper(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function formatParams(params) {
  let keys = Object.keys(params);
  let newParams = {};
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    newParams[firstLetterUpper(key)] = params[key];
  }
  return newParams;
}

function timestamp() {
  let date = new Date();
  let YYYY = date.getUTCFullYear();
  let MM = kitx.pad2(date.getUTCMonth() + 1);
  let DD = kitx.pad2(date.getUTCDate());
  let HH = kitx.pad2(date.getUTCHours());
  let mm = kitx.pad2(date.getUTCMinutes());
  let ss = kitx.pad2(date.getUTCSeconds());
  // 删除掉毫秒部分
  return `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}Z`;
}

function encode(str) {
  let result = encodeURIComponent(str);

  return result
    .replace(/\!/g, '%21')
    .replace(/\'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A');
}

function replaceRepeatList(target, key, repeat) {
  for (let i = 0; i < repeat.length; i++) {
    let item = repeat[i];

    if (item && typeof item === 'object') {
      const keys = Object.keys(item);
      for (let j = 0; j < keys.length; j++) {
        target[`${key}.${i + 1}.${keys[j]}`] = item[keys[j]];
      }
    } else {
      target[`${key}.${i + 1}`] = item;
    }
  }
}

function flatParams(params) {
  let target = {};
  let keys = Object.keys(params);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = params[key];
    if (Array.isArray(value)) {
      replaceRepeatList(target, key, value);
    } else {
      target[key] = value;
    }
  }
  return target;
}

function normalize(params) {
  let list = [];
  let flated = flatParams(params);
  let keys = Object.keys(flated).sort();
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = flated[key];
    list.push([encode(key), encode(value)]); //push []
  }
  return list;
}

function canonicalize(normalized) {
  let fields = [];
  for (let i = 0; i < normalized.length; i++) {
    let [key, value] = normalized[i];
    fields.push(key + '=' + value);
  }
  return fields.join('&');
}

function _buildParams({ accessKeyId, apiVersion, securityToken }) {
  let defaultParams = {
    Format: 'JSON',
    SignatureMethod: 'HMAC-SHA1',
    SignatureNonce: kitx.makeNonce(),
    SignatureVersion: '1.0',
    Timestamp: timestamp(),
    AccessKeyId: accessKeyId,
    Version: apiVersion
  };
  if (securityToken) {
    defaultParams.SecurityToken = securityToken;
  }
  // console.log(defaultParams);
  return defaultParams;
}

function request(action, params = {}, opts = {}, { endpoint, apiVersion }) {
  // 1. compose params and opts
  opts = Object.assign(
    {
      headers: {
        'x-sdk-client': 'nodejs with type client'
      }
    },
    opts
  );

  // format action until formatAction is false
  if (opts.formatAction !== false) {
    action = firstLetterUpper(action);
  }

  // format params until formatParams is false
  if (opts.formatParams !== false) {
    params = formatParams(params);
  }
  let defaults = _buildParams({
    accessKeyId: opts.accessKeyId,
    apiVersion,
    securityToken: opts.securityToken
  });
  params = Object.assign({ Action: action }, defaults, params);

  // 2. caculate signature
  let normalized = normalize(params);
  let canonicalized = canonicalize(normalized);
  // 2.1 get string to sign
  let stringToSign = `POST&${encode('/')}&${encode(canonicalized)}`;
  // 2.2 get signature
  const key = opts.accessKeySecret + '&';
  let signature = kitx.sha1(stringToSign, key, 'base64');
  // add signature
  normalized.push(['Signature', encode(signature)]);
  // 3. generate final url
  const url = `${endpoint}/`;
  // 4. send request

  // if (opts && !opts.agent) {
  //   opts.agent = this.keepAliveAgent;
  // }

  opts.headers = opts.headers || {};
  opts.headers['content-type'] = 'application/x-www-form-urlencoded';
  opts.data = canonicalize(normalized);
  const options = {
    headers: opts.headers,
    body: opts.data
  };
  // console.log(url);
  // console.log('=======');
  // console.log(options);
  // console.log('=======');
  return got
    .post(url, options)
    .then(res => JSON.parse(res.body))
    .catch(e => {
      console.error(e);
    });
}

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
    endpoint
  };
}

function makeProduct(name, opts) {
  const info = getProductData(name);
  return new Proxy(
    {
      product: name,
      endpoint: info.endpoint,
      apiVersion: info.version
    },
    {
      get: function(product, apiName) {
        if (!product.hasOwnProperty(apiName)) {
          product[apiName] = function(params, apiOpts) {
            return request(apiName, params, { ...opts, ...apiOpts }, { endpoint: product.endpoint, apiVersion: product.apiVersion });
          };
        }
        return product[apiName];
      }
    }
  );
}

function hostConfig(opts = {}) {
  return new Proxy(
    {},
    {
      get: function(api, productName) {
        if (!api.hasOwnProperty(productName)) {
          api[productName] = makeProduct(productName, opts);
        }
        return api[productName];
      }
    }
  );
}

module.exports = {
  hostConfig
};
