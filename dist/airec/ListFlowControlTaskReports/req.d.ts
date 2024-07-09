export interface ListFlowControlTaskReportsRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId"?: string;
    /**
     * 流量调控任务ID。
     * @example `1666697299358`
     */
    "taskId"?: string;
    /**
     * s时间戳（格式：yyyymmdd），如果
     * 不传，默认查询任务开始到t-1天统计数据与指标分析数据。
     * @example `1666195200`
     */
    "startTime"?: string;
    /**
     * s时间戳（格式：yyyymmdd），最大值为t-1。
     * @example `1668268800`
     */
    "endTime"?: string;
}
