export interface QuerySensClassificationResponse {
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
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 返回的数据保护伞分类分级中的分类节点信息。JSON格式。
     * @example `[{         "nodeName": "teset1",         "sensitiveNotNull": true,         "nodeId": "1aac2e35-b437-486b-95c7-a5ae48371024",         "nodeOldId": "1aac2e35-b437-486b-95c7-a5ae48371024",         "parentId": "0"     }]`
     */
    Data: any;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `10000001`
     */
    RequestId: string;
}
