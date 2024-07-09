export interface CancelRefund4DistributionRequest {
    /**
     * 分销商ID
     */
    "DistributorId"?: string;
    /**
     * 子分销订单ID
     */
    "SubDistributionOrderId"?: string;
    /**
     * 纠纷ID
     * @example `14244******33071`
     */
    "DisputeId"?: number;
    /**
     * 租户Id
     */
    "TenantId"?: string;
}
