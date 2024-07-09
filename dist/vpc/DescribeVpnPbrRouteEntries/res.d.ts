export interface DescribeVpnPbrRouteEntriesResponse {
    /**
     * 分页查询时每页的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `5BE01CD7-5A50-472D-AC14-CA181C5C03BE`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    VpnPbrRouteEntries: {
        /**
         * 策略路由信息列表。
         */
        VpnPbrRouteEntry: {
            /**
             * 策略路由的下一跳。
             * @example `vco-bp15oes1py4i66rmd****`
             */
            NextHop: string;
            /**
             * 策略路由的权重值。
             * 对于支持IPsec-VPN连接单隧道模式的VPN网关实例，策略路由权重值代表策略路由的优先级：
             *    - **100**：表示高优先级。存在源网段、目标网段均相同的多条策略路由时，该策略路由关联的IPsec连接为主链路。
             *    - **0**：表示低优先级。存在源网段、目标网段均相同的多条策略路由时，该策略路由关联的IPsec连接为备链路。
             * > 对于支持IPsec-VPN连接双隧道模式的VPN网关实例，当前参数不生效。
             * @example `100`
             */
            Weight: number;
            /**
             * 策略路由的目标网段。
             * @example `10.0.0.0/24`
             */
            RouteDest: string;
            /**
             * 策略路由的发布状态。
             * - **published**：已发布策略路由到VPC的路由表。
             * - **normal**：未发布策略路由到VPC的路由表。
             * @example `published`
             */
            State: string;
            /**
             * 创建策略路由的时间戳。单位：毫秒。
             * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建策略路由时的总时长。
             * @example `1492747187000`
             */
            CreateTime: number;
            /**
             * VPN网关实例ID。
             * @example `vpn-bp1a3kqjiiq9legfx****`
             */
            VpnInstanceId: string;
            /**
             * 策略路由的源网段。
             * @example `192.168.0.0/24`
             */
            RouteSource: string;
            /**
             * 策略路由的策略优先级。
             * 策略优先级数字越小，策略路由的优先级越高。
             * @example `10`
             */
            Priority: number;
            /**
             * 策略路由下一跳关联的隧道ID。
             * 仅支持双隧道模式IPsec-VPN连接的VPN网关实例会返回当前参数。
             * @example `tun-opsqc4d97wni2****`
             */
            NextHopTunnelId: string;
        }[];
    };
}
