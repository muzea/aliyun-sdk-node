export interface ListTagKeysRequest {
    /**
     * 要查询的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值：**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 分页查询时设置的每页行数，最大值为**50**，默认值为**10**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 列表的页码，起始值为**1**，默认值为**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 资源组ID。
     * @example `test`
     */
    "ResourceGroupId"?: string;
}
