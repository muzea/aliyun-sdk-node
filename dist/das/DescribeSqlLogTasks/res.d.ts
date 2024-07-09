export interface DescribeSqlLogTasksResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 返回信息列表。
         */
        List: {
            /**
             * 任务ID。
             * @example `9a4f5c4494dbd6713185d87a97aa53e8`
             */
            TaskId: string;
            /**
             * 数据库实例ID。
             * @example `r-bp1nti25tc7bq5****
            `
             */
            InstanceId: string;
            /**
             * 任务名称。
             * @example `SQL审计导出1`
             */
            Name: string;
            /**
             * 任务开始时间，格式为unix时间戳，单位为毫秒。
             * @example `1683859555482`
             */
            Start: number;
            /**
             * 任务结束时间，格式为unix时间戳，单位为毫秒。
             * @example `1705975320000`
             */
            End: number;
            /**
             * 任务状态。
             * - **INIT**：待调度 。
             * - **RUNNING**：运行中。
             * - **FAILED**：失败。
             * - **CANCELED**：已取消。
             * - **COMPLETED**：完成。
             * > 当任务处于**COMPLETED**时，可以查看离线任务的结果。
             * @example `RUNNING`
             */
            Status: string;
            /**
             * 日志总数。
             * @example `99999`
             */
            LogCount: number;
            /**
             * 任务进度。
             * @example `100`
             */
            Progress: number;
            /**
             * 扫描的文件数量。
             * @example `3000`
             */
            ScanFileSize: number;
            /**
             * 任务是否过期。
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            Expire: boolean;
            /**
             * 任务创建时间，格式为unix时间戳，单位为毫秒。
             * @example `1681363254423`
             */
            CreateTime: number;
            /**
             * 分析任务完成时间，格式为unix时间戳，单位为毫秒。
             * @example `1712751923000`
             */
            AnalysisTaskFinishTime: number;
            /**
             * 分析任务状态。
             * > 系统内部参数，用户无需关注。
             * @example `SCAN_ANALYZE_COMPLETED`
             */
            AnalysisTaskStatus: string;
            /**
             * 任务类型为**Export**时的链接地址。
             * @example `https://das-sqllog-download-cn-shanghai.oss-cn-shanghai.aliyuncs.com/la`
             */
            Result: string;
            /**
             * 任务类型。
             * - **Export**：导出任务。
             * - **Query**：查询任务。
             * @example `Export`
             */
            TaskType: string;
            /**
             * 查询筛选条件列表。
             */
            Filters: {
                /**
                 * 过滤参数。
                 * > 支持的过滤参数及其取值请参考**请求参数补充说明**。
                 * @example `keyWords
                `
                 */
                Key: string;
                /**
                 * 过滤参数的值。
                 * @example `select
                `
                 */
                Value: string;
            }[];
        }[];
        /**
         * 任务数量。
         * @example `40`
         */
        Total: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页数量。
         * @example `10`
         */
        PageSize: number;
    };
}
