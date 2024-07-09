export interface CreateVpnPbrRouteEntryRequest {
    /**
     * VPN网关实例所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `d7d24a21-f4ba-4454-9173-b3****`
     */
    "ClientToken"?: string;
    /**
     * VPN网关实例的ID。
     * @example `vpn-bp1a3kqjiiq9legfx****`
     */
    "VpnGatewayId": string;
    /**
     * 策略路由的源网段。
     * @example `192.168.1.0/24`
     */
    "RouteSource": string;
    /**
     * 策略路由的目标网段。
     * @example `10.0.0.0/24`
     */
    "RouteDest": string;
    /**
     * 策略路由的下一跳。
     * @example `vco-bp15oes1py4i66rmd****`
     */
    "NextHop": string;
    /**
     * 策略路由的权重值。
     * 在您使用同一个VPN网关实例搭建主备IPsec-VPN连接的场景中，您可以通过配置策略路由的权重值来指定主链路和备链路，权重值为100的策略路由默认为主链路，权重值为0的策略路由默认为备链路。
     * 您可以通过为IPsec连接配置健康检查来自动探测链路的连通性，在主链路不通的情况下，系统自动将流量切换至备链路进行传输，实现上云链路的高可用。具体操作，请参见[CreateVpnConnection](~~120391~~)。
     * - **100**：表示当前策略路由关联的IPsec连接为主链路。
     * - **0**：表示当前策略路由关联的IPsec连接为备链路。
     * > - 在您指定主备链路时，主策略路由和备策略路由的源网段和目标网段需相同。
     * > - 对于支持双隧道模式IPsec-VPN连接的VPN网关实例，无需配置该参数。一个双隧道模式IPsec-VPN连接包含两条隧道，两条隧道自动形成主备链路，无需再通过配置该参数指定主备链路。如果您配置了该参数，则该参数配置后不生效。
     * @example `0`
     */
    "Weight": number;
    /**
     * 是否发布策略路由到VPC的路由表中。取值：
     * - **true**：发布策略路由到VPC的路由表。
     * - **false**：不发布策略路由到VPC的路由表。
     * @example `true`
     */
    "PublishVpc": boolean;
    /**
     * 策略路由的描述信息。
     * 描述信息长度为1～100个字符。
     * @example `desctest`
     */
    "Description"?: string;
    /**
     * 隧道协议。仅取值：**Ipsec**（IPsec隧道协议）。
     * @example `Ipsec`
     */
    "OverlayMode"?: string;
    /**
     * 策略路由的策略优先级。取值范围：**1**~**100**。默认值：**10**。
     * 策略优先级数字越小，策略路由的优先级越高。
     * @example `10`
     */
    "Priority"?: number;
}
