export interface GetMigrationProcessResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `SADFSDFSD-SDFSDF-XDXCVX-ESWW`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `test error msg`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `110001123456`
     */
    ErrorCode: string;
    /**
     * 导入导出任务的进度信息，包括导入导出任务所有步骤的名称和进度状态。
     */
    Data: {
        /**
         * 导入导出任务的步骤运行状态。取值如下：
         * - INIT，初始状态。
         * - RUNNING，运行中。
         * - FAILURE，运行失败。
         * - SUCCESS，运行成功。
         * @example `SUCCESS`
         */
        TaskStatus: string;
        /**
         * 导入导出任务的步骤名称。
         * @example `IMPORE_PREPARE`
         */
        TaskName: string;
    }[];
}
