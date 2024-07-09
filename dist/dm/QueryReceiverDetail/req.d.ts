export interface QueryReceiverDetailRequest {
    /**
     * 收件人列表ID
     * @example `1235`
     */
    "ReceiverId": string;
    /**
     * 每页数目，默认：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 收件人地址，长度0-50
     * @example `b***@example.net`
     */
    "KeyWord"?: string;
    /**
     * 下一条开始位置，默认：0
     * @example `0`
     */
    "NextStart"?: string;
}
