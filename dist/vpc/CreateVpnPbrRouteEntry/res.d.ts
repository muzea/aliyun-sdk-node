export interface CreateVpnPbrRouteEntryResponse {
    /**
     * 策略路由的下一跳。
     * @example `vco-bp15oes1py4i66rmd****`
     */
    NextHop: string;
    /**
     * 策略路由的权重值。
     * - **100**：表示当前策略路由关联的IPsec连接为主链路。
     * - **0**：表示当前策略路由关联的IPsec连接为备链路。
     * @example `0`
     */
    Weight: number;
    /**
     * 策略路由的目标网段。
     * @example `10.0.0.0/24`
     */
    RouteDest: string;
    /**
     * 请求ID。
     * @example `5BE01CD7-5A50-472D-AC14-CA181C5C03BE`
     */
    RequestId: string;
    /**
     * 策略路由的描述信息。
     * @example `desctest`
     */
    Description: string;
    /**
     * 策略路由的发布状态。
     * - **published**：已发布策略路由到VPC的路由表。
     * - **normal**：未发布策略路由到VPC的路由表。
     * @example `normal`
     */
    State: string;
    /**
     * 创建策略路由的时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建策略路由时的总时长。
     * @example `1492747187000`
     */
    CreateTime: number;
    /**
     * 隧道协议。仅取值：**Ipsec**（IPsec隧道协议）。
     * @example `Ipsec`
     */
    OverlayMode: string;
    /**
     * 策略路由的源网段。
     * @example `192.168.1.0/24`
     */
    RouteSource: string;
    /**
     * VPN网关实例ID。
     * @example `vpn-bp1cmw7jh1nfe43m9****`
     */
    VpnInstanceId: string;
    /**
     * 策略路由的策略优先级。
     * @example `10`
     */
    Priority: number;
}
