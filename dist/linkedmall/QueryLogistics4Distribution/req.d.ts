export interface QueryLogistics4DistributionRequest {
    /**
     * 请求ID
     * @example `E090F1A0-7454-5F36-933C-E6332CE2****`
     */
    "RequestId"?: string;
    /**
     * 分销商ID
     * @example `1`
     */
    "DistributorId"?: string;
    /**
     * 主分销订单号
     * @example `123498124`
     */
    "MainDistributionOrderId"?: string;
    /**
     * 租户Id
     */
    "TenantId"?: string;
}
