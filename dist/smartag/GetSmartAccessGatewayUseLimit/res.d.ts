export interface GetSmartAccessGatewayUseLimitResponse {
    /**
     * 已购买的智能接入网关数量。
     * @example `47`
     */
    UsedAmount: number;
    /**
     * 请求ID。
     * @example `2265DB11-F5CC-496E-ADE7-D043AC37926A`
     */
    RequestId: string;
    /**
     * 可购买的智能接入网关总数。
     * @example `500`
     */
    TotalAmount: number;
}
