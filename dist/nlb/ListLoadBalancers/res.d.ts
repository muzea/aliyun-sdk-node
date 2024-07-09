export interface ListLoadBalancersResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 网络型负载均衡实例列表。
     */
    LoadBalancers: {
        /**
         * 网络型负载均衡实例所在的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 网络型负载均衡实例ID。
         * @example `nlb-83ckzc8d4xlp8o****`
         */
        LoadBalancerId: string;
        /**
         * 网络型负载均衡实例名称。
         * @example `NLB1`
         */
        LoadBalancerName: string;
        /**
         * 负载均衡实例类型。仅取值**Network**，表示网络型负载均衡。
         * @example `Network`
         */
        LoadBalancerType: string;
        /**
         * 网络型负载均衡的IPv4地址类型。取值：
         * - **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。
         * - **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
         * @example `Internet`
         */
        AddressType: string;
        /**
         * 协议版本。取值：
         * - **ipv4**：IPv4类型。
         * - **DualStack**：双栈类型。
         * @example `ipv4`
         */
        AddressIpVersion: string;
        /**
         * 网络型负载均衡的IPv6地址类型。取值：
         * - **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。
         * - **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
         * @example `Internet`
         */
        Ipv6AddressType: string;
        /**
         * 网络型负载均衡实例状态。取值：
         * - **Inactive**：已停止，表示实例监听不会再转发流量。
         * - **Active**：运行中。
         * - **Provisioning**：创建中。
         * - **Configuring**：变配中。
         * - **Deleting**：删除中。
         * - **Deleted**：已删除。
         * @example `Active`
         */
        LoadBalancerStatus: string;
        /**
         * 网络型负载均衡的业务状态。取值：
         * - **Abnormal**：异常状态。
         * - **Normal**：正常状态。
         * @example `Normal`
         */
        LoadBalancerBusinessStatus: string;
        /**
         * 网络型负载均衡操作锁配置。在`LoadBalancerBussinessStatus`为**Abnormal**（异常状态）时有效。
         */
        OperationLocks: {
            /**
             * 锁定的类型。取值 ：
             * - **SecurityLocked**：安全锁定。
             * - **RelatedResourceLocked**：关联锁定。
             * - **FinancialLocked**：欠费锁定。
             * - **ResidualLocked**：残留锁定。
             * @example `SecurityLocked`
             */
            LockType: string;
            /**
             * 锁定的原因。
             * @example `业务异常`
             */
            LockReason: string;
        }[];
        /**
         * 网络型负载均衡实例的专有网络ID。
         * @example `vpc-bp1b49rqrybk45nio****`
         */
        VpcId: string;
        /**
         * 资源创建时间，使用格林威治时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
         * @example `2022-07-18T17:22:45Z`
         */
        CreateTime: string;
        /**
         * 资源组ID。
         * @example `rg-atstuj3rtop****`
         */
        ResourceGroupId: string;
        /**
         * DNS域名。
         * @example `nlb-wb7r6dlwetvt5j****.cn-hangzhou.nlb.aliyuncs.com`
         */
        DNSName: string;
        /**
         * 可用区及交换机映射列表。
         */
        ZoneMappings: {
            /**
             * 可用区对应的交换机，每个可用区默认使用一台交换机和一个子网。
             * @example `vsw-bp1rmcrwg3erh1fh8****`
             */
            VSwitchId: string;
            /**
             * 可用区名称，您可以通过调用[DescribeZones](~~443890~~)接口获取。
             * @example `cn-hangzhou-a`
             */
            ZoneId: string;
            /**
             * 网络型负载均衡实例地址信息。
             */
            LoadBalancerAddresses: {
                /**
                 * 网络型负载均衡实例挂载的ENI的ID。
                 * @example `eni-bp12f1xhs5yal61a****`
                 */
                EniId: string;
                /**
                 * 网络型负载均衡实例私网IPv4地址。
                 * @example `192.168.3.32`
                 */
                PrivateIPv4Address: string;
                /**
                 * 弹性公网IP实例ID。
                 * @example `eip-bp1aedxso6u80u0qf****`
                 */
                AllocationId: string;
                /**
                 * 网络型负载均衡实例公网IPv4地址。
                 * @example `120.XX.XX.69`
                 */
                PublicIPv4Address: string;
                /**
                 * 网络型负载均衡实例Ipv6地址。
                 * @example `2001:db8:1:1:1:1:1:1`
                 */
                Ipv6Address: string;
                /**
                 * 网络型负载均衡实例私网IPv4地址探测状态。取值：
                 * - **Healthy**：健康。
                 * - **Unhealthy**：异常。
                 * > 只有可用区状态（**Status**）为运行中（**Active**）时才返回该参数。
                 * @example `Healthy`
                 */
                PrivateIPv4HcStatus: string;
                /**
                 * 网络型负载均衡实例IPv6地址探测状态。
                 * - **Healthy**：健康。
                 * - **Unhealthy**：异常。
                 * > 只有可用区状态（**Status**）为运行中（**Active**）时才返回该参数。
                 * @example `Healthy`
                 */
                PrivateIPv6HcStatus: string;
            }[];
            /**
             * 可用区状态。取值：
             * - **Active**：启动。
             * - **Stopped**：停止。该状态仅支持通过CADT容灾管理服务调用实现。
             * - **Shifted**：DNS摘除。
             * - **Starting**：启动中。该状态仅支持通过CADT容灾管理服务调用实现。
             * - **Stopping**：停止中。该状态仅支持通过CADT容灾管理服务调用实现。
             * @example `Active`
             */
            Status: string;
        }[];
        /**
         * 公网类型实例关联的共享带宽包ID。
         * @example `cbwp-bp1vevu8h3ieh****`
         */
        BandwidthPackageId: string;
        /**
         * 网络型负载均衡实例加入的安全组。
         */
        SecurityGroupIds: string[];
        /**
         * 网络型负载均衡实例是否开启跨可用区。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `true`
         */
        CrossZoneEnabled: boolean;
        /**
         * 网络型负载均衡实例计费配置。
         */
        LoadBalancerBillingConfig: {
            /**
             * 网络型负载均衡实例的计费类型。仅取值**PostPay**：表示按量计费。
             * @example `PostPay`
             */
            PayType: string;
        };
        /**
         * 删除保护配置。
         */
        DeletionProtectionConfig: {
            /**
             * 删除保护状态，取值：
             * - **true**：开启状态。
             * - **false**：关闭状态。
             * @example `true`
             */
            Enabled: boolean;
            /**
             * 更改删除保护状态的原因。长度为2~128个英文或中文字符，必须以大小字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
             * @example `实例运行中`
             */
            Reason: string;
            /**
             * 删除保护开启时间，使用格林威治时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
             * @example `2022-12-01T17:22:45Z`
             */
            EnabledTime: string;
        };
        /**
         * 修改保护配置。
         */
        ModificationProtectionConfig: {
            /**
             * 网络型负载均衡修改保护状态。取值：
             * - **NonProtection**：不保护，表示不允许传入**Reason**。如果配置了**Reason**，则清空其配置信息。
             * - **ConsoleProtection**：控制台修改保护，此时允许传入**Reason**。
             * > 当取值为**ConsoleProtection**，即开启修改保护后，用户不能通过负载均衡控制台修改实例配置，但可以通过调用API修改实例配置。
             * @example `ConsoleProtection`
             */
            Status: string;
            /**
             * 输入开启修改保护的原因。长度为2~128个英文或中文字符，必须以大小字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
             * 仅在**Status**为**ConsoleProtection**时有效。
             * @example `业务保障期`
             */
            Reason: string;
            /**
             * 修改保护开启时间，使用格林威治时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
             * @example `2022-12-01T17:22:45Z`
             */
            EnabledTime: string;
        };
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 实例的标签键。
             * @example `KeyTest`
             */
            Key: string;
            /**
             * 实例的标签值。
             * @example `ValueTest`
             */
            Value: string;
        }[];
    }[];
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
}
