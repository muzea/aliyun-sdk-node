export interface DescribeLogStoreOfEndpointGroupRequest {
    /**
     * 全球加速实例所属的地域，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 全球加速实例ID。
     * @example `ga-xxxxxxxxxxxxx`
     */
    "AcceleratorId": string;
    /**
     * 监听实例ID。
     * @example `lsr-xxxxxxxxxxxxxxx`
     */
    "ListenerId": string;
    /**
     * 终端节点组ID。
     * @example `epg-xxxxxxxxxxxxxxx`
     */
    "EndpointGroupId": string;
}
