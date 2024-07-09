export interface RecognizeBankCardResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"algo_version":"7a6241b9ccce3746da42ff09ee692b27721728bb;7a6241b9ccce3746da42ff09ee692b27721728bb","data":{"bankName":"交通银行","cardNumber":"6222621370000783456","validToDate":"2024/12","cardType":"DC"},"ftype":0,"height":2139,"orgHeight":2139,"orgWidth":3116,"prism_keyValueInfo":[{"key":"bankName","keyProb":100,"value":"交通银行","valuePos":[{"x":374,"y":169},{"x":1344,"y":143},{"x":1350,"y":344},{"x":379,"y":370}],"valueProb":100},{"key":"cardNumber","keyProb":100,"value":"6222621370000783456","valuePos":[{"x":103,"y":1253},{"x":3011,"y":1137},{"x":3021,"y":1370},{"x":112,"y":1486}],"valueProb":100},{"key":"validToDate","keyProb":100,"value":"2024/12","valuePos":[{"x":1347,"y":1573},{"x":2074,"y":1554},{"x":2077,"y":1698},{"x":1351,"y":1718}],"valueProb":100},{"key":"cardType","keyProb":100,"value":"DC","valuePos":[{"x":437,"y":445},{"x":1316,"y":433},{"x":1318,"y":541},{"x":439,"y":553}],"valueProb":100}],"sliceRect":{"x0":0,"y0":8,"x1":3110,"y1":0,"x2":3116,"y2":2046,"x3":0,"y3":2139},"width":3116}`
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
