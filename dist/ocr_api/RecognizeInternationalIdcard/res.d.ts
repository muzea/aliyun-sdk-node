export interface RecognizeInternationalIdcardResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 调用成功时，返回的设备事件记录。
     * @example `{"algo_version":"a85a881220cbffb0eca30e4026bef242a3eabf47","data":{"face":{"algo_version":"d0e343cb2b8da642748ec51aefda1d6ba50e52e0","data":{"name":"HR****","nameEn":"Bha****","birthDate":"19****","sex":"****","cardNumber":"22803****","virtualNumber":"9167738****"},"ftype":0,"height":1213,"orgHeight":1213,"orgWidth":1708,"prism_keyValueInfo":[{"key":"name","keyProb":72,"value":"HR****","valuePos":[{"x":545,"y":271},{"x":780,"y":284},{"x":777,"y":347},{"x":541,"y":333}],"valueProb":72},{"key":"nameEn","keyProb":100,"value":"Bha****","valuePos":[{"x":547,"y":340},{"x":947,"y":362},{"x":943,"y":419},{"x":543,"y":397}],"valueProb":100},{"key":"birthDate","keyProb":100,"value":"19****","valuePos":[{"x":907,"y":423},{"x":1197,"y":436},{"x":1194,"y":491},{"x":905,"y":479}],"valueProb":100},{"key":"sex","keyProb":100,"value":"****","valuePos":[{"x":662,"y":472},{"x":814,"y":479},{"x":812,"y":529},{"x":661,"y":523}],"valueProb":100},{"key":"cardNumber","keyProb":100,"value":"22803****","valuePos":[{"x":515,"y":973},{"x":1283,"y":992},{"x":1281,"y":1074},{"x":512,"y":1054}],"valueProb":100},{"key":"virtualNumber","keyProb":98,"value":"9167738****","valuePos":[{"x":587,"y":1068},{"x":1265,"y":1086},{"x":1264,"y":1142},{"x":585,"y":1123}],"valueProb":98}],"sliceRect":{"x0":0,"y0":0,"x1":1708,"y1":44,"x2":1706,"y2":1213,"x3":0,"y3":1213},"type":"印度身份证正面","width":1708}},"height":1213,"orgHeight":1213,"orgWidth":1708,"width":1708}`
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
