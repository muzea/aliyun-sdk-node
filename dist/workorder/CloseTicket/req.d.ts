export interface CloseTicketRequest {
    /**
     * 工单编号
     * @example `G2BKRWG`
     */
    "TicketId": string;
    /**
     * 用户UID。您可以通过DMS控制台右上角头像处查看您的UID。
     * @example `1139477549527134`
     */
    "Uid"?: string;
}
