export interface AddSecurityGroupRuleResponse {
    /**
     * Id of the request
     * @example `D0DB055C-51F2-5BB2-82A6-CD8A3C6EE6BA`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     * @example `12`
     */
    Data: string;
}
