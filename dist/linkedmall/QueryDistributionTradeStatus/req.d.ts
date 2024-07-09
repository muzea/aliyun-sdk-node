export interface QueryDistributionTradeStatusRequest {
    /**
     * 分销商ID
     */
    "DistributorId"?: string;
    /**
     * 渠道供应商ID
     */
    "DistributionSupplierId"?: string;
    /**
     * 分销交易号
     */
    "DistributionTradeId"?: string;
    /**
     * 租户Id
     */
    "TenantId"?: string;
}
