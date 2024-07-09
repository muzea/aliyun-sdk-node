export interface DescribeRouteTablesResponse {
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `DC668356-BCB4-42FD-9BC3-FA2B2E04B634`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    RouteTables: {
        /**
         * 路由表列表详细信息。
         */
        RouteTable: {
            /**
             * 路由表的创建时间。
             * 使用UTC时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2022-08-22T10:40:25Z`
             */
            CreationTime: string;
            /**
             * 路由表的状态。取值：
             * - **Pending**：配置中。
             * - **Available**：可用。
             * @example `Available`
             */
            Status: string;
            /**
             * 路由器的ID。
             * @example `vrt-bp1lhl0taikrteen****`
             */
            VRouterId: string;
            /**
             * 路由表的类型。取值：
             * - **Custom**：自定义路由表。
             * - **System**：系统路由表。
             * @example `Custom`
             */
            RouteTableType: string;
            /**
             * 路由表所属资源组的ID。
             * @example `rg-acfmxazb4ph****`
             */
            ResourceGroupId: string;
            /**
             * 路由表的ID。
             * @example `vtb-bp145q7glnuzdvzu2****`
             */
            RouteTableId: string;
            RouteEntrys: {
                /**
                 * 路由条目信息。
                 */
                RouteEntry: {
                    /**
                     * 路由条目的类型。取值：
                     * - **Custom**：自定义路由。
                     * - **System**：系统路由。
                     * - **BGP**：BGP路由。
                     * - **CEN**：云企业网CEN（Cloud Enterprise Network）路由。
                     * - **ECR**：专线网关路由。
                     * @example `Custom`
                     */
                    Type: string;
                    /**
                     * 路由条目的状态。取值：
                     * - **Pending**：配置中。
                     * - **Available**：可用。
                     * - **Modifying**：修改中。
                     * @example `Available`
                     */
                    Status: string;
                    /**
                     * 下一跳类型。取值：
                     * - **Instance**（默认值）：ECS实例。
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
                     * 路由条目的名称。
                     * 名称长度为2~128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
                     * @example `name`
                     */
                    RouteEntryName: string;
                    /**
                     * 路由条目的ID。
                     * @example `rte-bp1mnnr2al0naomnp****`
                     */
                    RouteEntryId: string;
                    /**
                     * 与下一跳相关联实例的实例ID。
                     * @example `vpc-bp1t36rn9l53iwbsf****`
                     */
                    InstanceId: string;
                    /**
                     * 路由表ID。
                     * @example `vtb-bp15w5q90d2rk3bww****`
                     */
                    RouteTableId: string;
                    /**
                     * 路由条目的描述信息。
                     * 描述长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
                     * @example `RouteEntryDescription`
                     */
                    Description: string;
                    /**
                     * 路由条目的目标网段。支持IPv4和IPv6的目标网段。需满足以下要求：
                     * - 目标网段不能指向100.64.0.0/10或被100.64.0.0/10包含。
                     * - 同一张路由表内的不同路由条目的目标网段不能相同。
                     * @example `192.168.2.0/24`
                     */
                    DestinationCidrBlock: string;
                    NextHops: {
                        /**
                         * 下一跳信息。
                         */
                        NextHop: {
                            /**
                             * 下一跳实例ID。
                             * @example `vpn-bp10zyaph5cc8b7c7****`
                             */
                            NextHopId: string;
                            /**
                             * 路由条目的权重。
                             * @example `100`
                             */
                            Weight: number;
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
                             * 路由是否可用。取值：
                             * - **0**：不可用。
                             * - **1**：可用。
                             * @example `1`
                             */
                            Enabled: number;
                        }[];
                    };
                }[];
            };
            VSwitchIds: {
                /**
                 * 交换机ID。
                 */
                VSwitchId: string[];
            };
        }[];
    };
}
