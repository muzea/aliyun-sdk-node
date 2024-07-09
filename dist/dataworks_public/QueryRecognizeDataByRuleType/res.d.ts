export interface QueryRecognizeDataByRuleTypeResponse {
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
     * 调用是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据：JSON格式。
     * @example `[{"custom": false,       "name": "EducationDegree",       "localeName": "EducationDegree",       "templateJsonStr": "{&quot;_clazz&quot;:&quot;com.alipay.dsgclient.sdk.dsg.fastscan.engine.cond.EducationDegreeCond&quot;}",       "desc": ""}]`
     */
    Data: any;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `10000001`
     */
    RequestId: string;
}
