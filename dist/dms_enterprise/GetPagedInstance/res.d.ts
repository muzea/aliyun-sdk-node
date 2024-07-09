export interface GetPagedInstanceResponse {
    /**
     * 用于跟踪服务请求。
     * @example `0a06e1e316757357507896067d3780`
     */
    TraceId: string;
    /**
     * 请求是否成功，取值：
     * - **true**：请求成功。
     * - **false**：请求失败。
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
     * 分页页码。
     * @example `1`
     */
    PageIndex: number;
    /**
     * 请求ID。请求的唯一标识，用于定位日志，排查问题。
     * @example `7FAD400F-7A5C-4193-8F9A-39D86C4F0231`
     */
    RequestId: string;
    /**
     * 每页数据量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 任务实例总数。
     * @example `2`
     */
    Total: number;
    /**
     * 返回的数据信息。
     */
    Data: {
        /**
         * 任务实例。
         */
        Instance: {
            /**
             * 业务时间。
             * @example `2023-05-14 16:00:57`
             */
            BusinessTime: string;
            /**
             * 归档校验状态，返回值如下：
             * - **0**：校验成功。
             * - **1**：校验不一致。
             * - **2**：未执行校验。
             * - **3**：正在运行。
             * - **4**：校验中断。
             * @example `3`
             */
            CheckStatus: number;
            /**
             * 任务流ID，任务流的唯一标识。
             * @example `33***`
             */
            DagId: number;
            /**
             * 是否删除归档文件。取值：
             * - **true**：删除。
             * - **false**：不删除。
             * @example `false`
             */
            Delete: string;
            /**
             * 任务结束的时间。
             * @example `2023-04-23 10:23:20`
             */
            EndTime: string;
            /**
             * 创建任务流的时间。
             * @example `2023-03-28 10:50:45`
             */
            GmtCreate: string;
            /**
             * 更新任务流的时间。
             * @example `2023-04-18 15:28:16`
             */
            GmtModified: string;
            /**
             * 历史任务流ID。
             * @example `68***`
             */
            HistoryDagId: number;
            /**
             * 任务流ID。
             * @example `24****`
             */
            Id: number;
            /**
             * 上次任务流运行的情况。
             * @example `{”nodes":[11***,11***]"}`
             */
            LastRunningContext: string;
            /**
             * 本次任务运行的详细信息。
             * @example `”归档任务日志：xxxx“`
             */
            Msg: string;
            /**
             * 归档任务状态。
             * - **0**：待调度。
             * - **1**：正在执行。
             * - **2**：已暂停。
             * - **3**：执行失败。
             * - **4**：执行成功。
             * - **5**：完成。
             * @example `1`
             */
            Status: number;
            /**
             * 链路类型。
             * - **1**：归档。
             * - **2**：归档恢复。
             * - **3**：归档校验。
             * @example `1`
             */
            TaskType: number;
            /**
             * 租户ID。
             * @example `34***`
             */
            TenantId: string;
            /**
             * 触发类型，取值如下：
             * - **0**：周期调度。
             * - **1**：手动运行。
             * @example `1`
             */
            TriggerType: number;
            /**
             * 版本号。
             * @example `13***`
             */
            Version: string;
        }[];
    };
}
