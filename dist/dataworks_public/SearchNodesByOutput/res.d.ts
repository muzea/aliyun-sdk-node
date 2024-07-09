export interface SearchNodesByOutputResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回数据为一个Map，Key是用户输入的每个output，Value是output对应的节点信息。
     * @example `{ "test_0709_1.630003558_out": {  "nodeId": 21673,             "nodeName": "hour_sql",             "ownerId": 123123123124,             "cronExpress": "00 00 00-23/2 * * ?",             "repeatability": true,             "programType": "ODPS_SQL",             "projectId": 11111,             "schedulerType": "NORMAL",             "priority": 1,             "baselineId": 20001721,             "connection": "odps_first"         },         "test_0709_1.630003556_out": {             "nodeId": 21671,             "nodeName": "start",             "ownerId": 123141231231,             "cronExpress": "00 *​/10 00-23 * * ?",             "repeatability": true,             "programType": "VIRTUAL",             "projectId": 1111,             "schedulerType": "NORMAL",             "priority": 1,             "baselineId": 20001721         }     }`
     */
    Data: any;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `SDFSDFSDF-asdfDFSDF-SDFSDf-SDfSFD`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
}
