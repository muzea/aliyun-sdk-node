export interface UpdateInstanceNetworkTypeResponse {
    /**
     * Id of the request
     * @example `9CC37B9F-F4B4-5FF1-939B-AEE78DC70130`
     */
    RequestId: string;
    /**
     * 返回结果。
     * @example `true`
     */
    Data: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `null`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `null`
     */
    ErrorMessage: string;
    /**
     * http状态码。
     * @example `200`
     */
    HttpStatusCode: string;
}
