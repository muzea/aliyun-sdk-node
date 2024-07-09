export interface DescribeEndpointGroupRequest {
    /**
     * 全球加速实例所属地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要查询的终端节点组的ID。
     * @example `epg-bp14sz7ftcwwjgrdm****`
     */
    "EndpointGroupId": string;
}
