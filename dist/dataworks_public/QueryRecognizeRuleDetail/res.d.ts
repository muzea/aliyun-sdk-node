export interface QueryRecognizeRuleDetailResponse {
    /**
     * 调用是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `9990030003`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `缺少参数`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回的敏感字段详情，JSON格式。
     * @example `{"nodeName":"单位基本概况","gmtModified":1709017449000,"hitThreshold":30,"sensitiveName":"mobile-yinni","templateId":"8222abeb-9784-4417-b420-0322926d5cbf","recognizeRulesType":2,"delete":false,"bydAccuracy":1,"colScan":"","defineType":1,"ydAccuracy":1,"contentRule":{"contentRule":{},"operationType":0},"nodeParent":"单位/单位基本信息/单位基本概况","level":6,"keyRuleId":"228248921215042mobile-yinni","isDelete":false,"levelName":"6level","sensitive":false,"operationType":0,"sourceName":"dsg-test-zuoyue","nodeId":"bea2fc81-90c9-45f3-b7a9-26d534208a0d","status":1}`
     */
    Data: any;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `10000001`
     */
    RequestId: string;
}
