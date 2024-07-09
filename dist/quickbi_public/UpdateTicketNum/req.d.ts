export interface UpdateTicketNumRequest {
    /**
     * 三方嵌入的票据值，即URL中的accessTicket值。
     * @example `040e6f79d33444838***83c7206c070`
     */
    "Ticket": string;
    /**
     * 票据数。
     * - 取值范围：1~99998，建议值为1。
     * @example `1`
     */
    "TicketNum": number;
}
