export interface ListWirelessCloudConnectorsRequest {
    /**
     * 地域id。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例状态列表。
     */
    "Statuses"?: string[];
    /**
     * 实例的id列表。
     */
    "WirelessCloudConnectorIds"?: string[];
    /**
     * 实例的名称列表。
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
    /**
     * 业务类型
     * @example `Business`
     */
    "BusinessType"?: string;
    /**
     * 是否查询实例组中的实例。取值：
     * - **true**：查询实例组中的实例。
     * - **false**：不查询实例组中的实例。
     * - **null**：全量查询实例，不区分实例是否在实例组中。
     * @example `false`
     */
    "IsInGroup"?: string;
    /**
     * 实例组实例id。
     * @example `cc5gg-****`
     */
    "WirelessCloudConnectorGroupId"?: string;
}
