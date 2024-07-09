export interface DescribeRouteEntryListResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `14A07460-EBE7-47CA-9757-12CC4761D47A`
     */
    RequestId: string;
    RouteEntrys: {
        /**
         * 路由条目信息。
         */
        RouteEntry: {
            /**
             * 路由条目的状态。取值：
             * - **Pending**：配置中。
             * - **Available**：可用。
             * - **Modifying**：修改中。
             * @example `Available`
             */
            Status: string;
            /**
             * 路由条目的类型。取值：
             * - **Custom**：自定义路由。
             * - **System**：系统路由。
             * - **BGP**：BGP路由。
             * - **CEN**：云企业网CEN（Cloud Enterprise Network）路由。
             * - **ECR**：专线网关路由。
             * @example `System`
             */
            Type: string;
            /**
             * IP协议的版本。取值：
             * - **ipv4**：ipv4协议。
             * - **ipv6**：ipv6协议。
             * @example `ipv4`
             */
            IpVersion: string;
            /**
             * 路由条目的描述信息。
             * @example `RouteEntryDescription`
             */
            Description: string;
            /**
             * 路由条目的名称。
             * @example `aaa`
             */
            RouteEntryName: string;
            /**
             * 路由条目的目标网段。
             * @example `192.168.2.0/24`
             */
            DestinationCidrBlock: string;
            /**
             * 路由条目的ID。
             * @example `rte-bp1mnnr2al0naomnp****`
             */
            RouteEntryId: string;
            /**
             * 路由表ID。
             * @example `vtb-bp15w5q90d2rk3bww****`
             */
            RouteTableId: string;
            /**
             * 路由条目的修改时间。使用UTC时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2022-05-09T03:00:07Z`
             */
            GmtModified: string;
            NextHops: {
                /**
                 * 下一跳信息。
                 */
                NextHop: {
                    /**
                     *  下一跳实例所在的地域ID。
                     * > 下一跳类型为**RouterInterface**时返回该参数。
                     * @example `cn-hangzhou`
                     */
                    NextHopRegionId: string;
                    /**
                     * 路由条目的权重。
                     * > 下一跳类型为**RouterInterface**时返回该参数。
                     * @example `100`
                     */
                    Weight: number;
                    /**
                     * 下一跳实例ID。
                     * @example `vpn-bp10zyaph5cc8b7c7****`
                     */
                    NextHopId: string;
                    /**
                     * 路由是否可用。取值：
                     * - **0**：不可用。
                     * - **1**：可用。
                     * > 下一跳类型为**RouterInterface**时返回该参数。
                     * @example `1`
                     */
                    Enabled: number;
                    /**
                     * 下一跳类型。取值：
                     * - **Instance**：ECS实例。
                     * - **HaVip**：高可用虚拟IP。
                     * - **VpnGateway**：VPN网关。
                     * - **NatGateway**：NAT网关。
                     * - **NetworkInterface**：辅助弹性网卡。
                     * - **RouterInterface**：路由器接口。
                     * - **IPv6Gateway**：IPv6网关。
                     * - **Attachment**：转发路由器。
                     * - **Ipv4Gateway**：IPv4网关。
                     * - **GatewayEndpoint**：网关终端节点。
                     * - **CenBasic**：CEN不支持转发路由器。
                     * - **Ecr**：专线网关。
                     * @example `Instance`
                     */
                    NextHopType: string;
                    /**
                     * 下一跳相关信息。
                     */
                    NextHopRelatedInfo: {
                        /**
                         * 与下一跳相关联实例的实例ID。
                         * @example `vpc-bp1t36rn9l53iwbsf****`
                         */
                        InstanceId: string;
                        /**
                         * 与下一跳相关联实例的实例类型。取值：
                         * - **VPC**：专有网络。
                         * - **VBR**：边界路由器。
                         * - **PCONN**：物理专线。
                         * @example `VPC`
                         */
                        InstanceType: string;
                        /**
                         * 下一跳相关联实例所在的地域ID。
                         * @example `ch-hangzhou`
                         */
                        RegionId: string;
                    };
                }[];
            };
            /**
             * 路由托管的类型。如果该字段为空，即表示该路由没有被托管。
             * 取值：**TR**，表示托管类型为转发路由器类型。
             * @example `TR`
             */
            ServiceType: string;
            /**
             * 路由创建来源。取值：
             * - **RoutePropagation**：动态传播源创建。
             * - **SystemCreate**：系统创建。
             * - **CustomCreate**：自定义创建。
             * @example `RoutePropagation`
             */
            Origin: string;
        }[];
    };
}
