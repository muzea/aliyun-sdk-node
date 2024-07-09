export interface TerminateTicketRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 工单ID。
     * @example `5491d3b4-14ee-4341-b5f1-db2c78beddeb`
     */
    "TicketId"?: string;
    /**
     * 处理意见。
     * @example `关单`
     */
    "Comment"?: string;
}
