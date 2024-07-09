export interface UpdateBasicEndpointResponse {
    /**
     * 请求ID。
     * @example `6FEA0CF3-D3B9-43E5-A304-D217037876A8`
     */
    RequestId: string;
    /**
     * 基础型全球加速实例终端节点所属的终端节点组ID。
     * @example `epg-bp1dmlohjjz4kqaun****`
     */
    EndpointGroupId: string;
    /**
     * 基础型全球加速实例终端节点ID。
     * @example `ep-bp14sz7ftcwwjgrdm****`
     */
    EndpointId: string;
    /**
     * 基础型全球加速实例终端节点的名称。
     * @example `ep01`
     */
    Name: string;
}
