export interface DelayTicketExpireTimeRequest {
    /**
     * 三方嵌入的票据值，即URL中的accessTicket值。
     * @example `040e6f79d33444838e*****c7206c070`
     */
    "Ticket": string;
    /**
     * 要延期的时间。
     * - 单位分钟，取值范围0~240（4小时）。
     * - 已过期的票据无法延期。
     * @example `200`
     */
    "ExpireTime": number;
}
