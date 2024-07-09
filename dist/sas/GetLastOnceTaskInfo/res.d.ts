export interface GetLastOnceTaskInfoResponse {
    /**
     * 任务运行时间。
     * @example `1671184531000`
     */
    CollectTime: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578AB****`
     */
    RequestId: string;
    /**
     * 数据的总条数。
     * @example `44`
     */
    TotalCount: number;
    /**
     * 最近一次扫描任务的ID。
     * @example `3f65e1f1bb13118891a889d569a3****`
     */
    TaskId: number;
    /**
     * 已完成的任务数。
     * @example `67`
     */
    FinishCount: number;
    /**
     * 最后一次任务信息。
     */
    TaskInfo: {
        /**
         * 任务运行的状态。取值：
         * - **INIT**：待启动
         * - **START**：已启动
         * - **SUCCESS**：已完成
         * - **TIMEOUT**：已超时
         * @example `SUCCESS`
         */
        Status: string;
        /**
         * 任务进度百分比。
         * @example `69`
         */
        Progress: number;
        /**
         * 扫描任务的执行结果。取值：
         * - **SUCCESS**：扫描任务执行成功。
         * - **TASK\_NOT\_SUPPORT_REGION**：镜像在不支持扫描的地域。
         * - **TASK_NOT_EXISTS**：任务不存在。
         * @example `SUCCESS`
         */
        Result: string;
    };
}
