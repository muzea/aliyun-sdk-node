export interface CreateVpnRouteEntryResponse {
    /**
     * 目的路由的下一跳。
     * @example `vco-bp15oes1py4i66rmd****`
     */
    NextHop: string;
    /**
     * 目的路由的权重值。取值：
     * - **100**：表示目的路由的优先级较高。
     * - **0**：表示目的路由的优先级较低。
     * @example `0`
     */
    Weight: number;
    /**
     * 目的路由的目标网段。
     * @example `10.0.0.0/24`
     */
    RouteDest: string;
    /**
     * 请求ID。
     * @example `5BE01CD7-5A50-472D-AC14-CA181C5C03BE`
     */
    RequestId: string;
    /**
     * 目的路由的描述信息。
     * @example `mytest`
     */
    Description: string;
    /**
     * 目的路由的发布状态。
     * - **published**：已发布目的路由到VPC的路由表。
     * - **normal**：未发布目的路由到VPC的路由表。
     * @example `published`
     */
    State: string;
    /**
     * 创建目的路由的时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建目的路由时的总时长。
     * @example `1492747187000`
     */
    CreateTime: number;
    /**
     * 隧道协议。仅取值：**Ipsec**（IPsec隧道协议）。
     * @example `Ipsec`
     */
    OverlayMode: string;
    /**
     * VPN网关实例ID。
     * @example `vpn-bp1a3kqjiiq9legfx****`
     */
    VpnInstanceId: string;
}
