export interface DeleteInstanceResponse {
    /**
     * Id of the request
     * @example `CB13FFDD-2DF8-5396-A848-2D6A31245B6D`
     */
    RequestId: string;
    /**
     * 返回结果。
     * @example `true`
     */
    Data: boolean;
    /**
     * 调用是否成功。
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
     * http 状态码
     * @example `200`
     */
    HttpStatusCode: string;
}
