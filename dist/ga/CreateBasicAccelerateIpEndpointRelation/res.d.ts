export interface CreateBasicAccelerateIpEndpointRelationResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 基础型全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    AcceleratorId: string;
    /**
     * 基础型全球加速实例的终端节点ID。
     * @example `ep-bp14sz7ftcwwjgrdm****`
     */
    EndpointId: string;
    /**
     * 基础型全球加速实例的加速IP实例ID。
     * @example `gaip-bp1****`
     */
    AccelerateIpId: string;
    /**
     * 基础型全球加速实例的加速IP和终端节点绑定状态。
     * > 该参数当前无实际意义。
     * @example `null`
     */
    State: string;
}
