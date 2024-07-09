export interface CreateBasicEndpointResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 基础型全球加速实例的终端节点组ID。
     * @example `epg-bp1dmlohjjz4kqaun****`
     */
    EndpointGroupId: string;
    /**
     * 基础型全球加速实例的终端节点ID。
     * @example `ep-bp14sz7ftcwwjgrdm****`
     */
    EndpointId: string;
}
