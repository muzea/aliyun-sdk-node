export interface GetDataCorrectSQLFileResponse {
    /**
     * 请求ID。
     * @example `283C461F-11D8-48AA-B695-DF092DA32AF3`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求异常信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * SQL附件下载地址。
     * @example `https://dmsxxx`
     */
    FileUrl: string;
}
