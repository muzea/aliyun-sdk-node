export interface ListCustomRoutingPortMappingsByDestinationRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表的页码，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 待查询后端实例所属的终端节点ID。
     * @example `ep-bp16jdc00bhe97sr5****`
     */
    "EndpointId": string;
    /**
     * 待查询后端实例服务IP地址。
     * @example `10.0.XX.XX`
     */
    "DestinationAddress": string;
}
