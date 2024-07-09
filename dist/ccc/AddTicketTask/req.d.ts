export interface AddTicketTaskRequest {
    /**
     * 工单ID。
     * @example `3d26b90a-c5d2-4b09-8219-********`
     */
    "TicketId": string;
    /**
     * 工单流程节点ID。
     * @example `3b8c672f-48f6-45f5-bf41-9d4cb2b4a716`
     */
    "TaskId": string;
    /**
     * 加签指派的处理人。
     * @example `assignee@ccc-test`
     */
    "Assignee": string;
    /**
     * 处理意见。
     * @example `请assignee处理。`
     */
    "Comment": string;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 加签位置。
     * - Before： 在我之前
     * - After: 在我之后
     * @example `After`
     */
    "Position"?: string;
}
