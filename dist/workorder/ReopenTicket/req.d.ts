export interface ReopenTicketRequest {
    /**
     * 工单编号
     * @example `0005PYGCW`
     */
    "TicketId": string;
    /**
     * 重开工单回复内容
     * @example `还没有解决问题`
     */
    "Content": string;
    /**
     * UID
     * @example `1013872004421947`
     */
    "Uid"?: string;
}
