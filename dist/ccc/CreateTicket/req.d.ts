export interface CreateTicketRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 工单模板ID。
     * @example `e9e4c76c-948d-4a6e-9ce2-9da0f5967a73`
     */
    "TemplateId"?: string;
    /**
     * 客户ID，云呼客户资料中的客户ID。
     * @example `51e155ce-3747-4f21-b402-13c69597b920`
     */
    "CustomerId"?: string;
    /**
     * 工单标题。
     * @example `售后工单。`
     */
    "Title"?: string;
    /**
     * 工单来源。
     * @example `CHAT`
     */
    "Source"?: string;
    /**
     * 通话ID。
     * @example `job-38860977107324****`
     */
    "ContactId"?: string;
    /**
     * 工单字段信息。
     * @example `{"productName":"玩具1"}`
     */
    "Context"?: string;
}
