export interface FinishTicketTaskRequest {
    /**
     * 工单ID。
     * @example `f2c6722b-cd13-442d-bf10-22a07c70d6d5`
     */
    "TicketId"?: string;
    /**
     * 节点ID。
     * @example `b52a34dc-f514-4600-9c39-3cf657167c97`
     */
    "TaskId"?: string;
    /**
     * 处理意见。
     * @example `同意`
     */
    "Comment": string;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
}
