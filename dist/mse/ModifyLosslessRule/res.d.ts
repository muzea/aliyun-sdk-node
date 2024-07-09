export interface ModifyLosslessRuleResponse {
    /**
     * 请求ID。
     * @example `3369AD10-F1A6-4E6F-B99E-20F51826****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `modifyLosslessRule success`
     */
    Message: string;
    /**
     * 返回数据。
     * @example `null`
     */
    Data: any;
}
