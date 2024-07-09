export interface DeleteVpcEndpointRequest {
    /**
     * 实例ID。
     * @example `es-cn-2r429tctl000d****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个ASCII字符。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    "ClientToken"?: string;
    /**
     * 要删除的终端节点ID。
     * @example `ep-bp18s6wy9420wdi4****`
     */
    "EndpointId": string;
}
