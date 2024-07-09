export interface CreateImportMigrationResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 导入导出包ID。作为后续执行导入任务或获取导入任务执行进度的入参。
     * @example `123456`
     */
    Data: number;
    /**
     * 错误信息。
     * @example `test error message`
     */
    ErrorMessage: string;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `ADFASDFASDFA-ADFASDF-ASDFADSDF-AFFADS`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `110001123456`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
