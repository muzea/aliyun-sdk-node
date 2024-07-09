export interface ListDistributionItemWithoutCacheRequest {
    /**
     * 分销商id
     * @example `75547******9212928`
     */
    "DistributorId"?: string;
    /**
     * 分销商商城id
     * @example `19e690e*****07a29c8`
     */
    "DistributionMallId"?: string;
    /**
     * 商品id
     * @example `10000***-6193664*****`
     */
    "LmItemId"?: string;
    /**
     * 商品状态
     * @example `1`
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
     * 租户Id
     * @example `7521****8332932`
     */
    "TenantId"?: string;
}
