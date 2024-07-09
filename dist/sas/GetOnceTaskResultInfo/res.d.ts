export interface GetOnceTaskResultInfoResponse {
    /**
     * 任务运行时间。
     * @example `1671184531000`
     */
    CollectTime: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CE500770-42D3-442E-9DDD-156E0F9F****`
     */
    RequestId: string;
    /**
     * 返回的总数据条数。
     * @example `44`
     */
    TotalCount: number;
    /**
     * 扫描任务ID。
     * @example `e7b70a4b030db086db52231f1b58****`
     */
    TaskId: number;
    /**
     * 任务完成数。
     * @example `47`
     */
    FinishCount: number;
    /**
     * 任务信息。
     */
    TaskInfo: {
        /**
         * 任务运行的状态。取值：
         * - **INIT**：待启动
         * - **START**：已启动
         * - **SUCCESS**：已完成
         * - **TIMEOUT**：已超时
         * @example `START`
         */
        Status: string;
    };
}
