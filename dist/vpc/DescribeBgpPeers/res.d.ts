export interface DescribeBgpPeersResponse {
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    BgpPeers: {
        /**
         * 查询的BGP邻居的详细信息。
         */
        BgpPeer: {
            /**
             * BGP邻居的状态。取值：
             * - **Pending**：待定。
             * - **Available**：可用。
             * - **Modifying**：修改中。
             * - **Deleting**：删除中。
             * - **Deleted**：已删除。
             * @example `Available`
             */
            Status: string;
            /**
             * BGP邻居的IP地址。
             * @example `116.62.XX.XX`
             */
            PeerIpAddress: string;
            /**
             * 路由器的ID。
             * @example `vbr-2zecmmvg5gvu8i4te****`
             */
            RouterId: string;
            /**
             * BGP组的ID。
             * @example `bgpg-2zev8h2wo414sfh****`
             */
            BgpGroupId: string;
            /**
             * BGP的连接状态。取值：
             * - **Idle**：未连接。
             * - **Connect**：使用中。
             * - **Active**：可用。
             * - **Established**：已建立。
             * - **Down**：不可用。
             * @example `Connect`
             */
            BgpStatus: string;
            /**
             * BFD跳数。
             * @example `3`
             */
            BfdMultiHop: number;
            /**
             * BGP邻居的AS号。
             * @example `65515`
             */
            PeerAsn: string;
            /**
             * 阿里云侧设备AS号。
             * @example `45104`
             */
            LocalAsn: string;
            /**
             * BGP组所属的地域ID。
             * @example `cn-shanghai`
             */
            RegionId: string;
            /**
             * BGP邻居的ID。
             * @example `bgp-2ze3un0ft1jd1xd****`
             */
            BgpPeerId: string;
            /**
             * 是否开启BFD协议。取值：
             * - **true**：开启BFD协议。
             * - **false**：未开启BFD协议。
             * @example `true`
             */
            EnableBfd: boolean;
            /**
             * 保持时间。
             * @example `30`
             */
            Hold: string;
            /**
             * IP版本。
             * @example `ipv4`
             */
            IpVersion: string;
            /**
             * 保活时间。
             * @example `10`
             */
            Keepalive: string;
            /**
             * BGP组的描述信息。
             * @example `test`
             */
            Description: string;
            /**
             * 路由限制。
             * @example `110`
             */
            RouteLimit: string;
            /**
             * 是否启用Fake AS号。取值：
             * - **true**：启用Fake AS号。
             * - **false**：未启用Fake AS号。
             * @example `true`
             */
            IsFake: boolean;
            /**
             * BGP组的认证密钥。
             * @example `!PWZ****`
             */
            AuthKey: string;
            /**
             * BGP邻居的名称。
             * @example `test`
             */
            Name: string;
            /**
             * 宣告的路由数。
             * @example `0`
             */
            AdvertisedRouteCount: number;
            /**
             * 接收的路由数。
             * @example `0`
             */
            ReceivedRouteCount: number;
            /**
             * BGP邻居的修改时间。
             * @example `2022-05-20T07:29:08Z`
             */
            GmtModified: string;
        }[];
    };
}
