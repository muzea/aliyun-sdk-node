export interface ListIpSetsRequest {
    /**
     * 全球加速实例所在的地域，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**100**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1yeeq8yfoyszmqy****`
     */
    "AcceleratorId": string;
}
