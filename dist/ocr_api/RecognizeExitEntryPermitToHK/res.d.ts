export interface RecognizeExitEntryPermitToHKResponse {
    /**
     * 请求唯一 ID
     * @example `C99EABB8-9FCB-5E5E-B4D9-AFCFA6C8B3FD`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{     "data":{         "permitType":"往来港澳通行证",         "nameCn":"朱伟",         "nameEn":"ZHU,WEI",         "birthDate":"2021.01.01",         "sex":"男",         "validPeriod":"2018.06.11-2028.06.10",         "issueAuthority":"公安部出入境管理局",         "issuePlace":"江苏",         "permitNumber":"C88600000",         "mrzCode":"CSC886084772&lt;2800800&lt;8200000&lt;6"     },     "ftype":0,     "height":692,     "orgHeight":692,     "orgWidth":1024,     "prism_keyValueInfo":[         {             "key":"permitType",             "keyProb":100,             "value":"往来港澳通行证",             "valuePos":[                 {                     "x":142,                     "y":39                 },                 {                     "x":476,                     "y":35                 },                 {                     "x":477,                     "y":75                 },                 {                     "x":142,                     "y":79                 }             ],             "valueProb":100         },         {             "key":"nameCn",             "keyProb":100,             "value":"朱伟",             "valuePos":[                 {                     "x":272,                     "y":126                 },                 {                     "x":346,                     "y":124                 },                 {                     "x":347,                     "y":160                 },                 {                     "x":272,                     "y":161                 }             ],             "valueProb":100         },         {             "key":"nameEn",             "keyProb":100,             "value":"ZHU,WEI",             "valuePos":[                 {                     "x":273,                     "y":168                 },                 {                     "x":403,                     "y":167                 },                 {                     "x":403,                     "y":194                 },                 {                     "x":274,                     "y":196                 }             ],             "valueProb":100         },         {             "key":"birthDate",             "keyProb":100,             "value":"2021.01.01",             "valuePos":[                 {                     "x":421,                     "y":240                 },                 {                     "x":421,                     "y":269                 },                 {                     "x":281,                     "y":269                 },                 {                     "x":281,                     "y":240                 }             ],             "valueProb":100         },         {             "key":"sex",             "keyProb":100,             "value":"男",             "valuePos":[                 {                     "x":502,                     "y":240                 },                 {                     "x":502,                     "y":270                 },                 {                     "x":474,                     "y":270                 },                 {                     "x":474,                     "y":240                 }             ],             "valueProb":100         },         {             "key":"validPeriod",             "keyProb":100,             "value":"2018.06.11-2028.06.10",             "valuePos":[                 {                     "x":579,                     "y":301                 },                 {                     "x":579,                     "y":328                 },                 {                     "x":275,                     "y":328                 },                 {                     "x":275,                     "y":301                 }             ],             "valueProb":100         },         {             "key":"issueAuthority",             "keyProb":100,             "value":"公安部出入境管理局",             "valuePos":[                 {                     "x":278,                     "y":361                 },                 {                     "x":524,                     "y":361                 },                 {                     "x":524,                     "y":391                 },                 {                     "x":278,                     "y":391                 }             ],             "valueProb":100         },         {             "key":"issuePlace",             "keyProb":100,             "value":"江苏",             "valuePos":[                 {                     "x":619,                     "y":361                 },                 {                     "x":619,                     "y":391                 },                 {                     "x":561,                     "y":391                 },                 {                     "x":561,                     "y":361                 }             ],             "valueProb":100         },         {             "key":"permitNumber",             "keyProb":100,             "value":"C88600000",             "valuePos":[                 {                     "x":524,                     "y":61                 },                 {                     "x":727,                     "y":60                 },                 {                     "x":728,                     "y":92                 },                 {                     "x":524,                     "y":94                 }             ],             "valueProb":100         },         {             "key":"mrzCode",             "keyProb":98,             "value":"CSC886084772&lt;2800800&lt;8200000&lt;6",             "valuePos":[                 {                     "x":714,                     "y":421                 },                 {                     "x":714,                     "y":449                 },                 {                     "x":65,                     "y":449                 },                 {                     "x":65,                     "y":421                 }             ],             "valueProb":98         }     ],     "sliceRect":{         "x0":107,         "y0":135,         "x1":880,         "y1":134,         "x2":874,         "y2":616,         "x3":117,         "y3":624     },     "width":1024 }`
     */
    Data: string;
    /**
     * 错误码
     * @example `noPermission`
     */
    Code: string;
    /**
     * 错误提示
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
}