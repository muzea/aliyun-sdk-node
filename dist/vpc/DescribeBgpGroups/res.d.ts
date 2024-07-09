export interface DescribeBgpGroupsResponse {
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `1D0971B2-A35A-42C1-A44C-E91360C36C0B`
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
    BgpGroups: {
        /**
         * BGP组的详细信息。
         */
        BgpGroup: {
            /**
             * BGP组的状态。
             * @example `Available`
             */
            Status: string;
            /**
             * BGP组的ID。
             * @example `bgpg-bp1k25cyp26cllath****`
             */
            BgpGroupId: string;
            /**
             * VBR的ID。
             * @example `vbr-bp1ctxy813985gkuk****`
             */
            RouterId: string;
            /**
             * 本地IDC侧设备的AS号。
             * @example `1****`
             */
            PeerAsn: string;
            /**
             * 阿里云侧AS号。
             * @example `45104`
             */
            LocalAsn: string;
            /**
             * BGP组所在地域ID。
             * @example `cn-shanghai`
             */
            RegionId: string;
            /**
             * 等待BGP消息传入的保持时间，单位为秒。
             * > 如果超过保持时间还没有消息传入，则认为BGP邻居断开了连接。
             * @example `30`
             */
            Hold: string;
            /**
             * BGP组的IP版本。取值：
             * - **IPv4**：IPv4版本。
             * - **IPv6**：IPv6版本，只有当创建BGP组的VBR开通IPv6功能时，支持IPv6版本。
             * @example `IPv4`
             */
            IpVersion: string;
            /**
             * BGP组的描述信息。
             * @example `BGP组描述。`
             */
            Description: string;
            /**
             * 保活时间，单位为秒。
             * @example `10`
             */
            Keepalive: string;
            /**
             * AS号是否为假。取值：
             * - **false**：否。
             * - **true**：是。
             * @example `true`
             */
            IsFake: string;
            /**
             * BGP动态路由学习的路由条目上限。
             * @example `99`
             */
            RouteLimit: string;
            /**
             * BGP组的名称。
             * @example `name`
             */
            Name: string;
            /**
             * BGP组使用的密钥。
             * @example `!PWZ****`
             */
            AuthKey: string;
        }[];
    };
}
