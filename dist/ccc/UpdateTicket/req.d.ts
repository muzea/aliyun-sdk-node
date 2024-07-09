export interface UpdateTicketRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 工单ID。
     * @example `5491d3b4-14ee-4341-b5f1-db2c78beddeb`
     */
    "TicketId": string;
    /**
     * 工单标题。
     * @example `标题`
     */
    "Title"?: string;
    /**
     * 用户ID。
     * @example `51e155ce-***-****-b402-13c69597b920`
     */
    "CustomerId"?: string;
    /**
     * 工单表单信息。
     * @example `{"productName":"玩具1"}`
     */
    "Context"?: string;
}
