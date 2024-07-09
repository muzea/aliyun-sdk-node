export interface QueryItemDetailWithDivisionRequest {
    /**
     * 分销商id
     * @example `75547******9212928`
     */
    "DistributorId"?: string;
    /**
     * 分销商商城id
     * @example `1339d4e******46ea9d126df506af8d2b`
     */
    "DistributionMallId"?: string;
    /**
     * lm商品ID
     * @example `10000035-61936646****`
     */
    "LmItemId"?: string;
    /**
     * 区域码
     * @example `410503006`
     */
    "DivisionCode"?: string;
    /**
     * 租户Id
     * @example `18******263`
     */
    "TenantId"?: string;
}
