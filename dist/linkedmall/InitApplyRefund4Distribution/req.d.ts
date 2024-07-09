export interface InitApplyRefund4DistributionRequest {
    /**
     * 子分销订单ID
     */
    "SubDistributionOrderId"?: string;
    /**
     * 退款类型
     * @example `1`
     */
    "BizClaimType"?: number;
    /**
     * 货物状态
     * @example `1`
     */
    "GoodsStatus"?: number;
    /**
     * 分销商ID
     */
    "DistributorId"?: string;
    /**
     * 租户Id
     */
    "TenantId"?: string;
}
