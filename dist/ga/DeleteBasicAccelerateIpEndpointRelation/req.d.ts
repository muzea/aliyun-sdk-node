export interface DeleteBasicAccelerateIpEndpointRelationRequest {
    /**
     * 全球加速所在的地域ID，仅取值**cn-hangzhou**。
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
     * 基础型全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    "AcceleratorId": string;
    /**
     * 基础型全球加速实例的终端节点ID。
     * 您可以调用[ListBasicEndpoints](~~2253406~~)查询终端节点ID。
     * @example `ep-bp14sz7ftcwwjgrdm****`
     */
    "EndpointId": string;
    /**
     * 基础型全球加速实例的加速IP实例ID。
     * 您可以调用[ListBasicAccelerateIps](~~2253393~~)查询加速IP实例ID。
     * @example `gaip-bp1****`
     */
    "AccelerateIpId": string;
}
