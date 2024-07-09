export interface DescribeCustomRoutingEndpointGroupRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待查询的终端节点组ID。
     * @example `epg-bp1dmlohjjz4kqaua****`
     */
    "EndpointGroupId": string;
}
