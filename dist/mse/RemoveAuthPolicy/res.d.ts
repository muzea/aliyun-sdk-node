export interface RemoveAuthPolicyResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `9515ACA4-E94D-440D-989E-C379FCED****`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 数据概览。
     * @example `true`
     */
    Data: string;
    /**
     * 状态码。
     * @example `500`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `True`
     */
    Success: boolean;
}
