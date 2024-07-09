export interface ListJobGroupsRequest {
    /**
     * 业务ID。
     * @example `174952ab-9825-4cc9-a5e2-de82d7fa4cdd`
     */
    "InstanceId": string;
    /**
     * 任务开始时间。
     * @example `1578965079000`
     */
    "StartTime"?: number;
    /**
     * 任务结束时间
     * @example `1579965079000`
     */
    "EndTime"?: number;
    /**
     * 页号
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页记录数。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 是否异步获取查询结果
     * @example `true`
     */
    "AsyncQuery"?: boolean;
    /**
     * 搜索关键字
     * @example `面试`
     */
    "SearchText"?: string;
    /**
     * 过滤条件：按照任务状态过滤，可以同时选择多个状态过滤，各个状态之间用逗号分隔，逻辑或关系。
     * 取值范围：
     * - **Draft**：草稿。
     * - **Scheduling**：调度中。
     * - **Executing**：执行中。
     * - **Completed**：已完成。
     * - **Paused**：挂起。
     * - **Failed**：失败。
     * - **Cancelled**：已取消。
     * - **Initializing**：初始化。
     * @example `Draft,Scheduling`
     */
    "JobGroupStatusFilter"?: string;
    "OnlyMinConcurrencyEnabled"?: boolean;
}
