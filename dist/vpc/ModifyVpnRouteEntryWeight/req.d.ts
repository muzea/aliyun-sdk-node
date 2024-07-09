export interface ModifyVpnRouteEntryWeightRequest {
    /**
     * VPN网关实例所属地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
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
     * VPN网关的ID。
     * @example `vpn-bp1a3kqjiiq9legfx****`
     */
    "VpnGatewayId": string;
    /**
     * 目的路由的目标网段。
     * @example `10.0.0.0/24`
     */
    "RouteDest": string;
    /**
     * 目的路由的下一跳。
     * @example `vco-bp15oes1py4i66rmd****	`
     */
    "NextHop": string;
    /**
     * 目的路由在修改之前设置的权重值，取值：
     * - **0**：低优先级。
     * - **100**：高优先级。
     * @example `0`
     */
    "Weight": number;
    /**
     * 目的路由新的权重值，取值：
     * - **0**：低优先级。
     * - **100**：高优先级。
     * @example `100`
     */
    "NewWeight": number;
    /**
     * 隧道协议，取值：**Ipsec**（IPsec隧道协议）。
     * @example `Ipsec`
     */
    "OverlayMode"?: string;
}
