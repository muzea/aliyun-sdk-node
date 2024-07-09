export interface DescribeCustomRoutingEndpointRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待查询的终端节点ID。
     * @example `ep-bp1dmlohjjz4kqaun****`
     */
    "EndpointId": string;
    /**
     * 待查询终端节点所属终端节点组ID。
     * @example `epg-bp1j184jhb9i9ubwf****`
     */
    "EndpointGroup"?: string;
}
