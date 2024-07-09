export interface DeleteCustomRoutingEndpointsRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 待删除终端节点的终端节点组ID。
     * @example `epg-bp1bpn0kn908w4nb****`
     */
    "EndpointGroupId": string;
    /**
     * 待删除的终端节点ID列表。
     * 输入为空时，删除当前终端节点组下所有的终端节点。
     * 您最多可以输入10个终端节点ID。
     */
    "EndpointIds": string[];
}
