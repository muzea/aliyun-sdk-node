export interface RecognizeBasicResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{     "content":"官科沃斯机器人丨聚划算",     "height":415,     "orgHeight":415,     "orgWidth":417,     "prism_version":"1.0.9",     "prism_wnum":8,     "prism_wordsInfo":[         {             "angle":-89,             "direction":0,             "height":249,             "pos":[                 {                     "x":17,                     "y":17                 },                 {                     "x":266,                     "y":17                 },                 {                     "x":266,                     "y":39                 },                 {                     "x":17,                     "y":39                 }             ],             "prob":95,             "width":21,             "word":"官科沃斯机器人丨聚划算",             "x":131,             "y":-96         }     ],     "width":417 }`
     */
    Data: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 详细信息
     * @example `message`
     */
    Message: string;
}
