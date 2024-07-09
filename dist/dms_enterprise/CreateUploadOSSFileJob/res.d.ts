export interface CreateUploadOSSFileJobResponse {
    /**
     * 请求ID。
     * @example `4E1D2B4D-3E53-4ABC-999D-1D2520B3471A`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 上传附件任务Key，可查询附件上传进展与任务详情，详情请参见[GetUserUploadFileJob](~~206069~~)。
     * @example `65254a4c1614235217749100e`
     */
    JobKey: string;
}
