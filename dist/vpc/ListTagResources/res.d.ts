export interface ListTagResourcesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `DE65F6B7-7566-4802-9007-96F2494AC512`
     */
    RequestId: string;
    TagResources: {
        /**
         * 绑定标签的资源信息。
         */
        TagResource: {
            /**
             * 资源类型。取值：
             * - **VPC**：表示资源类型为专有网络实例。
             * - **VSWITCH**：表示资源类型为交换机实例。
             * - **ROUTETABLE**：表示资源类型为路由表实例。
             * - **EIP**：表示资源类型为弹性公网IP实例。
             * - **VPNGATEWAY**：表示资源类型为VPN网关实例。
             * - **NATGATEWAY**：表示资源类型为NAT网关实例。
             * - **COMMONBANDWIDTHPACKAGE**：表示资源类型为共享带宽实例。
             * - **PREFIXLIST**：表示资源类型为前缀列表实例。
             * - **PUBLICIPADDRESSPOOL**：表示资源类型为IP地址池实例。
             * - **IPV4GATEWAY**：表示资源类型为IPv4网关实例。
             * - **IPV6GATEWAY**：表示资源类型为IPv6网关实例。
             * - **NETWORKACL**：表示资源类型为网络ACL实例。
             * - **TRAFFICMIRRORFILTER**：表示资源类型为流量镜像筛选条件实例。
             * - **TRAFFICMIRRORSESSION**：表示资源类型为流量镜像会话实例。
             * - **FLOWLOG**：表示资源类型为流日志实例。
             * - **HAVIP**：表示资源类型为高可用虚拟IP实例。
             * - **DHCPOPTIONSSET**：表示资源类型为DHCP选项集实例。
             * - **GATEWAYENDPOINT**：表示资源类型为网关终端节点实例。
             * @example `VPC`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `FinanceJoshua`
             */
            TagValue: string;
            /**
             * 资源ID。
             * @example `vpc-bp16qjewdsunr41m1****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            TagKey: string;
        }[];
    };
}
