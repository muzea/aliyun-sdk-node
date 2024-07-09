export interface ListLoadBalancersResponse {
    /**
     * 应用型负载均衡实例列表。
     */
    LoadBalancers: {
        /**
         * 访问日志配置结构。
         */
        AccessLogConfig: {
            /**
             * 日志项目。
             * @example `sls-setter`
             */
            LogProject: string;
            /**
             * 日志存储。
             * @example `test`
             */
            LogStore: string;
        };
        /**
         * 地址模式。取值 ：
         * - **Fixed**：固定IP模式，表示使用固定IP地址。
         * - **Dynamic**：动态IP模式，表示每个可用区动态分配IP地址。
         * @example `Fixed`
         */
        AddressAllocatedMode: string;
        /**
         * 负载均衡的地址类型。取值：
         * - **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。
         * - **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
         * @example `Intranet`
         */
        AddressType: string;
        /**
         * 公网类型实例关联的共享带宽包ID。
         * @example `cbwp-bp1vevu8h3ieh****`
         */
        BandwidthPackageId: string;
        /**
         * 资源创建时间。
         * @example `2022-07-02T02:49:05Z`
         */
        CreateTime: string;
        /**
         * DNS域名。
         * @example `alb-95qnr2itwu9orb****.cn-hangzhou.alb.aliyuncs.com`
         */
        DNSName: string;
        /**
         * 删除保护配置。
         */
        DeletionProtectionConfig: {
            /**
             * 删除保护状态，取值：
             * - **true**：开启。
             * - **false**：关闭。
             * @example `true`
             */
            Enabled: boolean;
            /**
             * 开启删除保护时间。
             * @example `2022-08-02T02:49:05Z`
             */
            EnabledTime: string;
        };
        /**
         * 负载均衡实例计费配置。
         */
        LoadBalancerBillingConfig: {
            /**
             * 计费类型。取值：
             * **PostPay**：按量计费。
             * @example `PostPay`
             */
            PayType: string;
        };
        /**
         * 负载均衡的业务状态。取值：
         * - **Abnormal**：异常。
         * - **Normal**：正常。
         * @example `Normal`
         */
        LoadBalancerBussinessStatus: string;
        /**
         * 负载均衡的版本，不同版本有不同功能限制和计费策略。取值：
         * - **Basic**：基础版。
         * - **Standard**：标准版。
         * - **StandardWithWaf**：WAF增强版。
         * @example `Standard`
         */
        LoadBalancerEdition: string;
        /**
         * 应用型负载均衡实例ID。
         * @example `alb-o9ulmq5hgn68jk****`
         */
        LoadBalancerId: string;
        /**
         * 负载均衡实例名称。
         * @example `alb-instance-test`
         */
        LoadBalancerName: string;
        /**
         * 负载均衡操作锁配置。
         */
        LoadBalancerOperationLocks: {
            /**
             * 锁定的原因。在**LoadBalancerBussinessStatus**为**异常**时有效。
             * @example `欠费`
             */
            LockReason: string;
            /**
             * 锁定的类型。取值 ：
             * - **SecurityLocked**：安全锁定。
             * - **RelatedResourceLocked**：关联锁定。
             * - **FinancialLocked**：欠费锁定。
             * - **ResidualLocked**：残留锁定。
             * @example `FinancialLocked`
             */
            LockType: string;
        }[];
        /**
         * 应用型负载均衡实例状态。取值：
         * - **Inactive**: 已停止，表示实例监听不会再转发流量。
         * - **Active**: 运行中。
         * - **Provisioning**：创建中。
         * - **Configuring**：变配中。
         * - **CreateFailed**：创建失败。
         * @example `Active`
         */
        LoadBalancerStatus: string;
        /**
         * 修改保护配置。
         */
        ModificationProtectionConfig: {
            /**
             * 开启删除保护的原因。
             * 长度为2~128个英文或中文字符，必须以大小写英文字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
             * 仅在**ModificationProtectionStatus**为**ConsoleProtection**有效且合法。
             * @example `托管实例`
             */
            Reason: string;
            /**
             * 负载均衡修改保护状态。取值：
             * - **NonProtection**：不保护，表示不允许传入ModificationProtectionReason。如果配置了ModificationProtectionReason，则清空其配置信息。
             * - **ConsoleProtection**：控制台修改保护，此时允许传入ModificationProtectionReason。
             * > 当取值为**ConsoleProtection**，即开启修改保护后，用户不能通过负载均衡控制台修改实例配置，但可以通过调用API修改实例配置。
             * @example `ConsoleProtection`
             */
            Status: string;
        };
        /**
         * 企业资源组ID。
         * @example `rg-atstuj3rtop****`
         */
        ResourceGroupId: string;
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
             * @example `alueTest`
             */
            Value: string;
        }[];
        /**
         * 应用型负载均衡实例的专有网络ID。
         * @example `vpc-bp1b49rqryhk45nio****`
         */
        VpcId: string;
        /**
         * 协议版本。取值：
         * - **IPv4**：IPv4类型。
         * - **DualStack**：双栈类型。
         * @example `DualStack`
         */
        AddressIpVersion: string;
        /**
         * 应用型负载均衡IPv6的网络地址类型。取值：
         * - **Internet**：公网。负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。
         * - **Intranet**：私网。负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
         * @example `Intranet`
         */
        Ipv6AddressType: string;
    }[];
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `100`
     */
    TotalCount: number;
}
