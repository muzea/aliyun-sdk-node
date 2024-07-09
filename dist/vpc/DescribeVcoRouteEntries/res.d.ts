export interface DescribeVcoRouteEntriesResponse {
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 路由条目信息列表。
     */
    VcoRouteEntries: {
        /**
         * IPsec连接ID。
         * @example `vco-p0w2jpkhi2eeop6q6****`
         */
        VpnConnectionId: string;
        /**
         * 路由条目的目标网段。
         * @example `192.168.10.0/24`
         */
        RouteDest: string;
        /**
         * 路由条目的下一跳。
         * @example `vco-p0w2jpkhi2eeop6q6****`
         */
        NextHop: string;
        /**
         * 目的路由条目的权重值。
         * - **0**：表示低优先级。
         * - **100**：表示高优先级。
         * @example `100`
         */
        Weight: number;
        /**
         * 路由条目的状态。
         * - **published**：表示当前目的路由条目已发布至转发路由器实例中。
         * - **Active**：表示当前BGP路由条目可用。
         * @example `published`
         */
        State: string;
        /**
         * 路由条目类型。
         * - **custom**：表示当前路由条目为目的路由条目。
         * - **bgp**：表示当前路由条目为BGP路由条目。
         * @example `custom`
         */
        RouteEntryType: string;
        /**
         * 创建目的路由条目的时间戳。
         * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建目的路由条目时的总时长。
         * @example `1658217008000`
         */
        CreateTime: number;
        /**
         * BGP路由条目经过的自治系统号列表。
         * @example `[12000]`
         */
        AsPath: string;
        /**
         * BGP路由条目携带的Community值。
         * @example `65535:65510`
         */
        Community: string;
        /**
         * BGP路由条目的来源。
         * - **CLOUD**：表示当前BGP路由条目是IPsec连接通过转发路由器学习到的。
         * - **VPN_BGP**：表示当前BGP路由条目是IPsec连接从本地数据中心学习到的。
         * @example `CLOUD`
         */
        Source: string;
    }[];
    /**
     * 请求ID。
     * @example `E18980E8-C8C2-31BD-8156-AE2BBDEC87E1`
     */
    RequestId: string;
}
