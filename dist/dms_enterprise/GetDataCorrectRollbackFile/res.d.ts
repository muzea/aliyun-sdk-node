export interface GetDataCorrectRollbackFileResponse {
    /**
     * 请求ID。
     * @example `3CDB8601-AD74-4A47-8114-08E08CD6****`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求异常时返回的错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 附件下载地址。
     * @example `https://dmsxxx`
     */
    FileUrl: string;
}
