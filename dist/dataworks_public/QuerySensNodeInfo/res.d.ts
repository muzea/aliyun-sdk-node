export interface QuerySensNodeInfoResponse {
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
     * 返回的JSON格式业务数据。
     * @example `{     "success": true,     "httpStatusCode": 200,     "data": {         "result": [                         {                 "sensitiveName": "证件到期日期",                 "sensitiveId": "fd4ff5a2-9537-43d1-8e4f-1d0b5ffaac12",                 "status": 0,                 "templateName": "内置分类分级模板",                  "keyRuleId": "228248921215042证件到期日期"             }         ],         "totalCount": 1,         "currentPage": 1,         "pageSize": 10     },     "requestId": 10000001 }`
     */
    Data: any;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `10000001`
     */
    RequestId: string;
}
