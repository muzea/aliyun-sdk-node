export interface DescribePublishedRouteEntriesResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `FF1A7B2A-677F-4F71-96EA-6002B329F437`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条目数。
     * @example `2`
     */
    TotalCount: number;
    PublishedRouteEntries: {
        /**
         * 路由条目信息列表。
         */
        PublishedRouteEntry: {
            /**
             * 路由条目下一跳关联的实例ID。
             * @example ` ecs-bp18sth14qii3pn****`
             */
            NextHopId: string;
            /**
             * 在云企业网中的发布状态：
             * - **Published**：已发布。
             * - **NonPublished**：未发布。
             * @example `Published`
             */
            PublishStatus: string;
            /**
             * 网络实例的路由表ID。
             * @example `vtb-il7qut3mjgtlcbpk2****`
             */
            ChildInstanceRouteTableId: string;
            /**
             * 路由条目下一跳关联的实例类型。
             * - **Instance**：ECS实例。
             * - **HaVip**：高可用虚拟IP。
             * - **RouterInterface**：路由器接口。
             * - **NetworkInterface**：弹性网卡。
             * - **VpnGateway**：VPN网关。
             * - **IPv6Gateway**：IPv6网关。
             * - **Ipv4Gateway**：IPv4网关。
             * - **NatGateway**：NAT网关。
             * - **Attachment**：网络实例连接。
             * - **service**：云服务。
             * - **VBR**：边界路由器。
             * - **CCN**：云连接网。
             * - **VPC**：专有网络。
             * - **local**：表示当前路由条目为网络实例的系统路由，没有下一跳。
             * - **TR**：转发路由器。
             * - **BlackHole**：表示当前路由条目为黑洞路由，没有下一跳。
             * - **EcRouterInterface**：高速通道路由器接口。
             * - **HealthCheck**：健康检查。
             * - **AS**：云连接网接入网关。
             * - **classicLink**：经典网络实例。
             * - **GatewayEndpoint**：网关终端节点。
             * - **CPE**：边界路由器连接的本地数据中心。
             * @example `Instance`
             */
            NextHopType: string;
            /**
             * 是否允许发布或撤销该路由到云企业网。
             * - **true**：允许发布或撤销。
             * - **false**：不允许发布或撤销。
             * @example `true`
             */
            OperationalMode: boolean;
            /**
             * 路由条目的目标网段。
             * @example `172.16.0.0/16`
             */
            DestinationCidrBlock: string;
            /**
             * 路由条目的类型。
             * - **CEN**：表示通过云企业网传递的路由。
             * - **System**：表示系统路由。
             * - **Custom**：表示自定义路由。
             * @example `System`
             */
            RouteType: string;
            Conflicts: {
                /**
                 * 产生冲突的路由条目信息列表。
                 */
                Conflict: {
                    /**
                     * 路由条目产生冲突的原因。
                     * - **conflict**：路由条目的目标网段相同造成的冲突。
                     *
                     * - **overflow**：其他网络实例路由表的路由条目数量超出限制造成的冲突。
                     * @example `conflict`
                     */
                    Status: string;
                    /**
                     * 产生冲突的路由条目的目标网段。
                     * @example `192.168.20.0/24`
                     */
                    DestinationCidrBlock: string;
                    /**
                     * 产生路由冲突的对端的网络实例ID。
                     * @example `ccn-0q3b7oviikmm9h****`
                     */
                    InstanceId: string;
                    /**
                     * 产生路由条目冲突的对端的网络实例类型。
                     * - **VPC**：专有网络。
                     * - **VBR**：边界路由器。
                     * - **CCN**：云连接网。
                     * @example `CCN`
                     */
                    InstanceType: string;
                    /**
                     * 产生路由条目冲突的对端的网络实例所属地域ID。
                     * @example `ccn-cn-shanghai`
                     */
                    RegionId: string;
                }[];
            };
        }[];
    };
}
