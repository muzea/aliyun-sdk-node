export interface WithdrawTicketRequest {
    /**
     * 工单ID。
     * @example `5491d3b4-14ee-4341-b5f1-db2c78beddeb`
     */
    "TicketId": string;
    /**
     * 处理意见。
     * @example `撤回，补充信息`
     */
    "Comment": string;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
}
