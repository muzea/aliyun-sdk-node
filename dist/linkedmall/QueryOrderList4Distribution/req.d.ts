export interface QueryOrderList4DistributionRequest {
    /**
     * 分销商ID
     */
    "DistributorId"?: string;
    /**
     * 订单过滤条件
     */
    "FilterOption"?: string;
    /**
     * 页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页行数
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 租户Id
     */
    "TenantId"?: string;
}
