export interface StartMigrationResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 启动执行导入导出任务的状态信息。
     * - true，任务启动成功。
     * - false，任务启动失败。
     * @example `true`
     */
    Data: boolean;
    /**
     * 错误信息。
     * @example `test error msg`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `FSDFSDF-WERWER-XVCX-DSFSDF`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `110001123445`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
