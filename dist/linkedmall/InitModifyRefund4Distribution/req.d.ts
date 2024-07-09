export interface InitModifyRefund4DistributionRequest {
    /**
     * 分销商ID
     */
    "DistributorId"?: string;
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
     * 纠纷ID，通过查询订单逆向申请详情接口获取
     * @example `14244******33071`
     */
    "DisputeId"?: number;
    /**
     * 租户Id
     */
    "TenantId"?: string;
}
