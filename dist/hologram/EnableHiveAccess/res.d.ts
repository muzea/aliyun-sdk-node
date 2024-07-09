export interface EnableHiveAccessResponse {
    /**
     * Id of the request
     * @example `EA8F0084-5831-5907-BB31-BD05D2617844`
     */
    RequestId: string;
    /**
     * 返回结果
     * @example `true`
     */
    Data: boolean;
    /**
     * 操作是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `404`
     */
    ErrorCode: string;
    /**
     * 错误信息
     * @example `Internal server error.`
     */
    ErrorMessage: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: string;
}
