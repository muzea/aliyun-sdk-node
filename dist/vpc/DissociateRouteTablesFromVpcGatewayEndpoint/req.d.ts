export interface DissociateRouteTablesFromVpcGatewayEndpointRequest {
    /**
     * 网关终端节点实例ID。
     * @example `vpce-bp11cwae3p6z7ftbm****`
     */
    "EndpointId": string;
    /**
     * 路由表列表。
     */
    "RouteTableIds": string[];
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `TF-DissociateRouteTablesFromVpcGatewayEndpoint-1634369235-8f****`
     */
    "ClientToken"?: string;
    /**
     * 是否检测此次请求。取值：
     * - **true**：发送检查请求。
     * - **false**（默认值）：发送正常请求。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 终端节点所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
