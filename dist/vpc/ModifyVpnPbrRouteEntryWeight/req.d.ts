export interface ModifyVpnPbrRouteEntryWeightRequest {
    /**
     * VPN网关实例所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
     */
    "ClientToken"?: string;
    /**
     * VPN网关实例ID。
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
     * @example `vco-bp15oes1py4i66rmd****	`
     */
    "NextHop": string;
    /**
     * 策略路由原始的权重值。取值：
     * - **100**：表示当前策略路由关联的IPsec连接为主链路。
     * - **0**：表示当前策略路由关联的IPsec连接为备链路。
     * @example `0`
     */
    "Weight": number;
    /**
     * 策略路由新的权重值。取值：
     * - **100**：表示当前策略路由关联的IPsec连接为主链路。
     * - **0**：表示当前策略路由关联的IPsec连接为备链路。
     * @example `100`
     */
    "NewWeight": number;
    /**
     * 隧道协议。仅取值：**Ipsec**（IPsec隧道协议）。
     * @example `Ipsec`
     */
    "OverlayMode"?: string;
    /**
     * 策略路由的策略优先级。
     * - 如果您的策略路由之前不存在策略优先级，本参数可不填。
     * - 如果您的策略路由之前存在策略优先级，本参数可填，也可不填。
     *
     *         如果您填写了本参数，请填写策略路由之前已配置的策略优先级，如果您填写为其他值，则当前接口会调用失败。
     * @example `10`
     */
    "Priority"?: number;
}
