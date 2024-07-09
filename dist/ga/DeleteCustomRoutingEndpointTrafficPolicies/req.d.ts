export interface DeleteCustomRoutingEndpointTrafficPoliciesRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 待删除流量通行目标的终端节点ID。
     * > 该参数为必选。
     * @example `ep-2zewuzypq5e6r3pfh****`
     */
    "EndpointId": string;
    /**
     * 流量通行目标ID列表。
     * 您最多可输入9000个流量通行目标ID。
     */
    "PolicyIds": string[];
}
