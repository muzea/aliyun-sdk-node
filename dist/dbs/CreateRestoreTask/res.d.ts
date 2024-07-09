export interface CreateRestoreTaskResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `60AF7C5D-EF4D-4D48-8FD5-C0823FDF28AC`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `The specified parameter %s value is not valid.  `
     */
    ErrMessage: string;
    /**
     * 恢复任务ID。
     * @example `s102h*****`
     */
    RestoreTaskId: string;
}
