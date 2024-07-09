export interface DescribeCenChildInstanceRouteEntriesResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `17A57456-EF48-419D-9AE6-9B03D9996018`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条目数。
     * @example `4`
     */
    TotalCount: number;
    CenRouteEntries: {
        /**
         * 路由条目信息。
         */
        CenRouteEntry: {
            /**
             * 路由条目的状态。取值：
             * - **Active**：可用。
             * - **Candidate**：备份。
             * - **Rejected**：拒绝。
             * - **Prohibited**：禁止。
             * @example `Active`
             */
            Status: string;
            /**
             * 路由条目的类型。取值：
             * - **CEN**：表示通过云企业网传递的路由。
             * - **System**：表示系统路由。
             * - **Custom**：表示自定义路由。
             * @example `CEN`
             */
            Type: string;
            /**
             * 路由条目在云企业网中的发布状态。取值：
             * - **Published**：已发布。
             * - **NonPublished**：未发布。
             * @example `Published`
             */
            PublishStatus: string;
            /**
             * 路由条目下一跳类型。取值：
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
             * @example `VBR`
             */
            NextHopType: string;
            /**
             * 是否允许发布或撤销该路由到云企业网。取值：
             * - **true**：允许发布或撤销。
             * - **false**：不允许发布或撤销。
             * @example `true`
             */
            OperationalMode: boolean;
            /**
             * 路由条目下一跳关联的实例所属的地域ID。
             * @example `cn-hangzhou`
             */
            NextHopRegionId: string;
            /**
             * 路由条目下一跳关联的实例ID。
             * @example `vbr-bp13gtbhdp0pfqg6s****`
             */
            NextHopInstanceId: string;
            /**
             * 路由条目的目标网段。
             * @example `10.0.0.0/24`
             */
            DestinationCidrBlock: string;
            /**
             * 路由表ID。
             * @example `vtb-bp1r9pvl4xen8s9ju****`
             */
            RouteTableId: string;
            CenRouteMapRecords: {
                /**
                 * 路由条目匹配到的路由策略信息。
                 */
                CenRouteMapRecord: {
                    /**
                     * 路由策略ID。
                     * @example `cenrmap-w4yf7toozfol3q****`
                     */
                    RouteMapId: string;
                    /**
                     * 路由策略应用的地域ID。
                     * @example `cn-hangzhou`
                     */
                    RegionId: string;
                }[];
            };
            Conflicts: {
                /**
                 * 产生冲突的路由条目信息。
                 */
                Conflict: {
                    /**
                     * 路由条目产生冲突的原因。取值：
                     * - **conflict**：路由条目的目标网段相同造成的冲突。
                     *
                     * - **overflow**：其他网络实例路由表的路由条目数量超出限制造成的冲突。
                     * @example `conflict`
                     */
                    Status: string;
                    /**
                     * 产生冲突的路由条目的目标网段。
                     * @example `192.168.1.0/24`
                     */
                    DestinationCidrBlock: string;
                    /**
                     * 产生路由条目冲突的对端的网络实例ID。
                     * @example `ccn-0q3b7oviikmm9h****`
                     */
                    InstanceId: string;
                    /**
                     * 产生路由条目冲突的对端的网络实例类型。取值：
                     * - **VPC**：专有网络。
                     * - **VBR**：边界路由器。
                     * - **CCN**：云连接网。
                     * - **ECR**：专线网关。
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
            Communities: {
                /**
                 * 路由条目的Community属性值列表。
                 */
                Community: string[];
            };
            AsPaths: {
                /**
                 * 路由条目的AS Path属性值列表。
                 */
                AsPath: string[];
            };
        }[];
    };
}
