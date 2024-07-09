export interface PublishVpnRouteEntryRequest {
    /**
     * VPN网关实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `d7d24a21-f4ba-4454-9173-b382****`
     */
    "ClientToken"?: string;
    /**
     * VPN网关实例ID。
     * @example `vpn-bp1a3kqjiiq9legfx****`
     */
    "VpnGatewayId": string;
    /**
     * VPN网关路由条目的目标网段。
     * @example `10.0.0.0/24`
     */
    "RouteDest": string;
    /**
     * VPN网关路由条目的下一跳。
     * @example `vco-bp15oes1py4i66rmd****`
     */
    "NextHop": string;
    /**
     * VPN网关路由条目类型。取值：
     * - **pbr**：策略路由。
     * - **dbr**：目的路由。
     * @example `pbr`
     */
    "RouteType": string;
    /**
     * 发布或撤销路由。取值：
     * - **true**：发布。
     *   该参数取值为**true**，表示将目的路由或策略路由发布到VPC的系统路由表中。
     * - **false**：撤销。
     *   该参数取值为**false**，表示将已发布的目的路由或策略路由从VPC系统路由表中撤销。
     * @example `true`
     */
    "PublishVpc": boolean;
}
