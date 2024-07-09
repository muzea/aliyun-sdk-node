export interface SubmitReturnGoodLogistics4DistributionRequest {
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
     * 物流单号
     * @example ` SF131*****7061`
     */
    "LogisticsNo"?: string;
    /**
     * 公司代码
     * @example `SF`
     */
    "CpCode"?: string;
    /**
     * 租户Id
     */
    "TenantId"?: string;
}
