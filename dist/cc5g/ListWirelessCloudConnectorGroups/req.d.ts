export interface ListWirelessCloudConnectorGroupsRequest {
    /**
     * 地域id。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例组的状态列表。最多支持10个实例组的状态。
     */
    "WirelessCloudConnectorGroupStatus"?: string[];
    /**
     * 实例组的ID列表。最多支持10个实例组的ID列表。
     */
    "WirelessCloudConnectorGroupIds"?: string[];
    /**
     * 实例组的名称列表。最多支持10个实例组的名称。
     */
    "WirelessCloudConnectorGroupNames"?: string[];
    /**
     * 上一页的查询返回的值，首页查询不传值。
     * @example `iou001238joojjaere
    `
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
}
