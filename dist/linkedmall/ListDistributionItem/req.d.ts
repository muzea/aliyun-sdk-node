export interface ListDistributionItemRequest {
    /**
     * 分销商id
     */
    "DistributorId"?: string;
    /**
     * 分销商商城id
     */
    "DistributionMallId"?: string;
    /**
     * LM商品ID
     */
    "LmItemId"?: string;
    /**
     * 商品状态
     */
    "ItemStatus"?: number;
    /**
     * 页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数量
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 租户ID
     */
    "TenantId"?: string;
}
