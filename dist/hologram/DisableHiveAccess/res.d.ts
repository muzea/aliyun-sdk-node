export interface DisableHiveAccessResponse {
    /**
     * Id of the request
     * @example `82B7A554-4D00-50DF-95D9-B59E7B4D5489`
     */
    RequestId: string;
    /**
     * 返回结果。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求结果
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `404`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `Internal server error.`
     */
    ErrorMessage: string;
    /**
     * http状态码。
     * @example `200`
     */
    HttpStatusCode: string;
}
