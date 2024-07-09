export interface ExecuteDataExportResponse {
    /**
     * 请求ID。
     * @example `FE8EE2F1-4880-46BC-A704-5CF63EAF9A04`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
