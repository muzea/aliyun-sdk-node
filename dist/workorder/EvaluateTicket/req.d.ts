export interface EvaluateTicketRequest {
    /**
     * 工单号
     * @example `001ET1BU1P`
     */
    "TicketId": string;
    /**
     * 是否解决
     * @example `true`
     */
    "Solved": boolean;
    /**
     * 评价星级1-5星
     * @example `1`
     */
    "Score": string;
    /**
     * 评价内容
     * @example `很满意的一次工单服务`
     */
    "Content"?: string;
    /**
     * UID
     * @example `1902070573958003`
     */
    "Uid"?: string;
}
