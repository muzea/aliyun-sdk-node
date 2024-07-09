export interface DescribeCustomRoutingEndpointGroupDestinationsRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定需要查询的终端节点组映射信息配置ID。
     * @example `dst-123abc****`
     */
    "DestinationId": string;
    /**
     * 映射信息配置所属终端节点组ID。
     * @example `epg-bp1j184jhb9i9ubwf****`
     */
    "EndpointGroupId"?: string;
}
