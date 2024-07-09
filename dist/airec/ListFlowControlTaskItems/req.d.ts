export interface ListFlowControlTaskItemsRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId"?: string;
    /**
     * 流量调控任务ID。
     * @example `1667369058068`
     */
    "taskId"?: string;
    /**
     * 分页，页码。
     * @example `1`
     */
    "page"?: number;
    /**
     * 分页查询时，设置的每页行数。最大值为500。
     * @example `10`
     */
    "size"?: number;
}
