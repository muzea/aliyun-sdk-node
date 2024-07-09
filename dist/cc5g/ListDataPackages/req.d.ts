export interface ListDataPackagesRequest {
    /**
     * 5G高速上云实例id。
     * @example `cc5g-xxxx`
     */
    "WirelessCloudConnectorId": string;
    /**
     * 流量包状态列表。
     */
    "Statuses"?: string[];
    /**
     * 流量包id，最多20个。
     */
    "DataPackageIds"?: string[];
    /**
     * 流量包名称，最多20个
     */
    "Names"?: string[];
    /**
     * 上一页的查询返回的值，首页查询不传值。
     * @example `iou001238joojjaere`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
}
