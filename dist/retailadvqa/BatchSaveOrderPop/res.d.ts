export interface BatchSaveOrderPopResponse {
    /**
     * Id of the request
     * @example `testRequestId`
     */
    RequestId: string;
    /**
     * 结果 true/false
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码
     * @example `200/400...`
     */
    HttpStatusCode: string;
    /**
     * 异常码
     * @example `testErrorCode`
     */
    ErrorCode: string;
    /**
     * 异常信息
     * @example `testErrorMessage`
     */
    ErrorMessage: string;
}
