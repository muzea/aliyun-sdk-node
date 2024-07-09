export interface DescribeVpnRouteEntriesResponse {
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `BF3995A6-FA4F-4C74-B90F-89ECF4BFF4D5`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表总条目数。
     * @example `1`
     */
    TotalCount: number;
    VpnRouteEntries: {
        /**
         * 路由条目信息列表。
         */
        VpnRouteEntry: {
            /**
             * 路由条目的类型。
             * - **custom**：表示VPN网关实例的目的路由。
             * - **bgp**：表示VPN网关实例的BGP路由。
             * @example `custom`
             */
            RouteEntryType: string;
            /**
             * 路由条目的下一跳。
             * @example `vco-bp1tui07ob10fmuro****`
             */
            NextHop: string;
            /**
             * 目的路由的权重值。
             * - 对于支持IPsec-VPN连接双隧道模式的VPN网关实例，目的路由的权重值默认为**100**。
             * - 对于支持IPsec-VPN连接单隧道模式的VPN网关实例，目的路由权重值代表目的路由的优先级：
             *     - **100**：表示高优先级。存在目标网段相同的多条目的路由时，该目的路由关联的IPsec连接为主链路。
             *     - **0**：表示低优先级。存在目标网段相同的多条目的路由时，该目的路由关联的IPsec连接为备链路。
             * @example `100`
             */
            Weight: number;
            /**
             * 路由条目的目标网段。
             * @example `10.0.0.0/24`
             */
            RouteDest: string;
            /**
             * 路由条目经过的AS路径。
             * @example `65501,65001,60011`
             */
            AsPath: string;
            /**
             * 路由条目的状态。取值：
             * - **published**：已发布。
             * - **normal**：未发布。
             * @example `normal`
             */
            State: string;
            /**
             * 创建路由条目的时间戳。
             * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建路由条目时的总时长。
             * @example `1563874074000`
             */
            CreateTime: number;
            /**
             * 路由条目的Community属性值。
             * @example `65001:1000,65501:2000`
             */
            Community: string;
            /**
             * 路由条目的来源。
             * - **CLOUD**：表示当前路由是通过VPN网关关联的阿里云产品传播过来的。
             * - **VPN_BGP**：表示当前路由是通过VPN网关BGP路由协议学习到的。
             * @example `CLOUD`
             */
            Source: string;
            /**
             * VPN网关实例ID。
             * @example `vpn-bp1cmw7jh1nfe43m9****`
             */
            VpnInstanceId: string;
            /**
             * 路由条目下一跳关联的隧道ID。
             * > 仅支持双隧道模式IPsec-VPN连接的VPN网关实例会返回当前参数。
             * @example `tun-36cfgpwjn58axj****`
             */
            NextHopTunnelId: string;
        }[];
    };
}
