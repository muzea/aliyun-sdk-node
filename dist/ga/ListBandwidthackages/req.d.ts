export interface ListBandwidthackagesRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**100**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
