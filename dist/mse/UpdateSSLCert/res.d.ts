export interface UpdateSSLCertResponse {
    /**
     * 请求ID。
     * @example `CA689BED-08F3-54C2-A206-A0924E2ACA0A`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 响应码。
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
     * 是否更新成功。
     * @example `true`
     */
    Data: boolean;
}
