export interface CancelDistributionTradeRequest {
    /**
     * 分销商ID
     * @example `1`
     */
    "DistributorId"?: string;
    /**
     * 分销交易号，可能包含多笔主单
     * @example `15303515*******`
     */
    "DistributionTradeId"?: string;
    /**
     * 租户Id
     */
    "TenantId"?: string;
}
