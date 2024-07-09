export interface AssociateRouteTablesWithVpcGatewayEndpointRequest {
    /**
     * 要关联路由表的网关终端节点实例ID。
     * @example `vpce-m5e371h5clm3uadih****`
     */
    "EndpointId": string;
    /**
     * 要关联的路由表ID。**N**的取值范围为**1**~**20**，即一次最多绑定20张路由表。
     * @example `vtb-m5elgtm3aj586iitr****`
     */
    "RouteTableIds": string[];
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会关联路由表。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并关联路由表。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要关联路由表的网关终端节点的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
