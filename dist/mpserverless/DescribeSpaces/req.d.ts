export interface DescribeSpacesRequest {
    /**
     * 页码，从0开始。
     * @example `0`
     */
    "PageNum"?: number;
    /**
     * 页大小，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 服务空间ID列表。
     */
    "SpaceIds"?: string[];
    /**
     * 租户 ID。
     * @example `XKHKTPDJ`
     */
    "TenantId"?: string;
    /**
     * EMAS项目空间ID。
     * @example `3449110`
     */
    "EmasWorkspaceId"?: number;
    /**
     * 套餐规格
     * @example `ULTIMATE`
     */
    "SpecCode"?: string;
}
