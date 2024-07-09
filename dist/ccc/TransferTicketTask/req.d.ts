export interface TransferTicketTaskRequest {
    /**
     * 工单ID。
     * @example `5491d3b4-14ee-4341-b5f1-db2c78beddeb`
     */
    "TicketId"?: string;
    /**
     * 节点ID。
     * @example `f780ade8-3ca9-458b-b067-63077946a570`
     */
    "TaskId"?: string;
    /**
     * 处理人ID。
     * @example `assignee@ccc-test`
     */
    "Assignee": string;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 处理意见。
     * @example `请assignee处理`
     */
    "Comment"?: string;
}
