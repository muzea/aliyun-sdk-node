export interface AddSSLCertResponse {
    /**
     * 请求ID。
     * @example `E1CC74F0-5BDE-5220-A031-5CA622D80723`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
    /**
     *
     * 返回结果码。
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
     * 返回数据结构，关联是否成功。
     * @example `true`
     */
    Data: boolean;
}
