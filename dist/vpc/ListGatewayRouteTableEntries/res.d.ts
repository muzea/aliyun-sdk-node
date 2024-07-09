export interface ListGatewayRouteTableEntriesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 网关路由表中路由条目的详细信息。
     */
    GatewayRouteEntryModels: {
        /**
         * 路由条目的状态。
         * - **Pending**：配置中。
         * - **Available**：可用。
         * - **Modifying**：修改中。
         * @example `Available`
         */
        Status: string;
        /**
         * 下一跳实例ID。
         * @example `i-bp11gcl0sm85t9bi****`
         */
        NextHopId: string;
        /**
         * 路由条目的名称。
         * @example `test`
         */
        Description: string;
        /**
         * 下一跳的类型。取值：
         * - **EcsInstance**：ECS实例。
         * - **NetworkInterface**：弹性网卡。
         * - **Local**：本地。
         * @example `EcsInstance`
         */
        NextHopType: string;
        /**
         * 路由条目的目标网段。
         * @example `192.168.0.5`
         */
        DestinationCidrBlock: string;
        /**
         * 路由条目的名称。
         * 长度为2～128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
         * @example `name`
         */
        Name: string;
        /**
         * 下一跳信息。
         */
        NextHops: {
            /**
             * 下一跳实例ID。
             * @example `vpn-bp10zyaph5cc8b7c7****`
             */
            NextHopId: string;
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
             * @example `Instance`
             */
            NextHopType: string;
            /**
             * 路由条目的权重。
             * @example `100`
             */
            Weight: string;
            /**
             * 路由是否可用。取值：
             * - **0**：不可用。
             * - **1**：可用。
             * @example `1`
             */
            Enabled: string;
        }[];
    }[];
}
