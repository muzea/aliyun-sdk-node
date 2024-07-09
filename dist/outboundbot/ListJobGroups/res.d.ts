export interface ListJobGroupsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否调用成功。true：调用成功。                                 false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Success`
     */
    Message: string;
    /**
     * 异步查询ID，若为异步查询，可以根据此ID获取查询结果。
     * @example `2bb0cf15-2126-4c9b-bc30-bb5301b96284`
     */
    AsyncTaskId: string;
    /**
     * 任务列表。
     */
    JobGroups: {
        /**
         * 分页页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页数据数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 记录总数
         * @example `100`
         */
        TotalCount: number;
        /**
         * 数组
         */
        List: {
            /**
             * 执行状态，取值范围：
             * - **Draft**：草稿。
             * - **Scheduling**：调度中。
             * - **Executing**：执行中。
             * - **Completed**：已完成。
             * - **Paused**：挂起。
             * - **Failed**：失败。
             * - **Cancelled**：已取消。
             * - **Initializing**：初始化。
             * @example `Draft`
             */
            Status: string;
            /**
             * 任务ID。
             * @example `c62e6789-28a8-41db-941e-171a01d3b3b9`
             */
            JobGroupId: string;
            /**
             * 创建时间。
             * @example `1578550074361`
             */
            CreationTime: number;
            /**
             * 任务名字。
             * @example `催收作业组`
             */
            JobGroupName: string;
            /**
             * 总呼叫次数。
             * @example `10`
             */
            TotalCallNum: number;
            /**
             * 话术ID。
             * @example `c62e6789-28a8-41db-941e-171a01d3b3b9`
             */
            ScriptId: string;
            /**
             * 任务描述。
             * @example `催收的作业组`
             */
            JobGroupDescription: string;
            /**
             * jobFile解析任务的ID。
             * @example `c62e6789-28a8-41db-941e-171a01d3b3b9`
             */
            JobDataParsingTaskId: string;
            /**
             * 话术名称。
             * @example `话术名称`
             */
            ScriptName: string;
            /**
             * 话术版本。
             * @example `d9e828ac-744b-4dd3-848a-17a3da9167b8`
             */
            ScriptVersion: string;
            /**
             * 修改时间，单位毫秒。
             * @example `1578550074361`
             */
            ModifyTime: string;
            /**
             * 任务统计信息。
             * @example `{}`
             */
            Progress: {
                /**
                 * 作业未接通数量。
                 * @example `1`
                 */
                TotalNotAnswered: number;
                /**
                 * 执行状态，取值范围：
                 * - **Draft**：草稿。
                 * - **Scheduling**：调度中。
                 * - **Executing**：执行中。
                 * - **Completed**：已完成。
                 * - **Paused**：挂起。
                 * - **Failed**：失败。
                 * - **Cancelled**：已取消。
                 * - **Initializing**：初始化。
                 * @example `Scheduling`
                 */
                Status: string;
                /**
                 * 开始时间。
                 * @example `1578550074361`
                 */
                StartTime: number;
                /**
                 * 已作废
                 * @example `5`
                 */
                FailedNum: number;
                /**
                 * 已作废
                 * @example `5`
                 */
                PausedNum: number;
                /**
                 * 已作废
                 * @example `5`
                 */
                CancelledNum: number;
                /**
                 * 作业总数。
                 * @example `20`
                 */
                TotalJobs: number;
                /**
                 * 到当前时间为止作业完成数量。
                 * @example `3`
                 */
                TotalCompleted: number;
                /**
                 * 到目前为止执行总时长。
                 * @example `1578550074361`
                 */
                Duration: number;
                /**
                 * 已作废
                 * @example `10`
                 */
                ExecutingNum: number;
                /**
                 * 调度中的作业数量。
                 * @example `10`
                 */
                Scheduling: number;
            };
            /**
             * 导出进度。
             * @example `{}`
             */
            ExportProgress: {
                /**
                 * 导出任务状态，取值范围：
                 * - **PENDING**：等待中。
                 * - **IN_PROGRESS**：处理中。
                 * - **FINISHED**：完成。
                 * - **FAILED**：失败。
                 * @example `PENDING`
                 */
                Status: string;
                /**
                 * 下载地址。
                 * @example `http://www.xxx.com/xxx`
                 */
                FileHttpUrl: string;
                /**
                 * 进度。
                 * @example `50`
                 */
                Progress: string;
            };
            /**
             * 策略。
             * @example `{}`
             */
            Strategy: {
                /**
                 * 策略结束时间。
                 * @example `2209702074000`
                 */
                EndTime: number;
                /**
                 * 策略开始时间。
                 * @example `1578550074000`
                 */
                StartTime: number;
            };
            MinConcurrency: number;
        }[];
    };
}
