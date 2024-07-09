export interface GetLoadBalancerAttributeResponse {
    /**
     * 访问日志配置。
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
     * - **Fixed**：固定IP模式，表示使用固定的IP地址。
     * - **Dynamic**：动态IP模式，表示在每个可用区动态分配IP地址。
     * @example `Dynamic`
     */
    AddressAllocatedMode: string;
    /**
     * 应用型负载均衡实例的网络地址类型。取值：
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
     * 资源创建时间，使用格林威治时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
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
         * - **true**：开启状态。
         * - **false**：关闭状态。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 删除保护开启时间，使用格林威治时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
         * @example `2022-08-02T02:49:05Z`
         */
        EnabledTime: string;
    };
    /**
     * 应用型负载均衡实例计费配置。
     */
    LoadBalancerBillingConfig: {
        /**
         * 计费类型。
         * 取值： **PostPay**表示按量计费。
         * @example `PostPay`
         */
        PayType: string;
    };
    /**
     * 应用型负载均衡的业务状态。取值：
     * - **Abnormal**：异常状态。
     * - **Normal**：正常状态。
     * @example `Normal`
     */
    LoadBalancerBussinessStatus: string;
    /**
     * 应用型负载均衡的版本，不同版本有不同功能限制和计费策略。取值：
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
     * 实例名称。
     * 长度为2~128个英文或中文字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `alb1`
     */
    LoadBalancerName: string;
    /**
     * 应用型负载均衡操作锁配置。
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
     * - **CreateFailed**：创建失败，此时不会产生费用，实例只能被删除。
     * @example `Active`
     */
    LoadBalancerStatus: string;
    /**
     * 修改保护配置。
     */
    ModificationProtectionConfig: {
        /**
         * 输入开启修改保护的原因。长度为2~128个英文或中文字符，必须以大小字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
         * 仅在**ModificationProtectionStatus**为**ConsoleProtection**有效且合法。
         * @example `托管实例`
         */
        Reason: string;
        /**
         * 应用型负载均衡修改保护状态。取值：
         * - **NonProtection**：不保护，表示不允许传入ModificationProtectionReason。如果配置了ModificationProtectionReason，则清空其配置信息。
         * - **ConsoleProtection**：控制台修改保护，此时允许传入ModificationProtectionReason。
         * > 当取值为**ConsoleProtection**，即开启修改保护后，用户不能通过负载均衡控制台修改实例配置，但可以通过调用API修改实例配置。
         * @example `ConsoleProtection`
         */
        Status: string;
    };
    /**
     * 应用型负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
    /**
     * 企业资源组ID。
     * @example `rg-atstuj3rtop****`
     */
    ResourceGroupId: string;
    /**
     * 标签。
     */
    Tags: {
        /**
         * 实例的标签键。
         * 最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 实例的标签值。
         * 最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 实例的专有网络ID。
     * @example `vpc-bp1b49rqrybk45nio****`
     */
    VpcId: string;
    /**
     * 可用区及交换机映射列表，至少指定两个可用区。
     */
    ZoneMappings: {
        /**
         * 实例地址。
         */
        LoadBalancerAddresses: {
            /**
             * 标识IPv4类型的IP地址。
             * **AddressIPVersion**为**IPv4**和**DualStack**均生效，公网或私网IP地址由**AddressType**决定。
             * @example `192.168.10.1`
             */
            Address: string;
            /**
             * 标识IPv6类型的IP地址。
             * 仅在**AddressIPVersion**为**DualStack**时有效，公网或私网IP地址由**Ipv6AddressType**决定。
             * @example `2408:XXXX:39d:eb00::/56`
             */
            Ipv6Address: string;
            /**
             * IPv4私网地址。
             * @example `10.0.1.181`
             */
            IntranetAddress: string;
            /**
             * 弹性公网IP标识。
             * @example `eip-uf6wm****1zj9`
             */
            AllocationId: string;
            /**
             * 公网EIP的类型。取值：
             * - **Common**：弹性公网IP，简称EIP。
             * - **Anycast**：任播弹性公网IP，简称Anycast EIP。
             * > ALB支持绑定Anycast EIP的地域，请参见[使用限制](~~460727~~)。
             * @example `Common`
             */
            EipType: string;
        }[];
        /**
         * 可用区对应的交换机，每个可用区只能使用一台交换机和一个子网。
         * @example `vsw-bp12mw1f8k3jgy****`
         */
        VSwitchId: string;
        /**
         * 应用型负载均衡实例的可用区ID。
         * 您可以通过调用[DescribeZones](~~189196~~)接口获取可用区ID对应的可用区的信息。
         * @example `cn-hangzhou-a`
         */
        ZoneId: string;
    }[];
    /**
     * 协议版本。取值：
     * - **IPv4**：IPv4类型
     * - **DualStack**：双栈类型
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
    /**
     * 应用型负载均衡实例绑定的安全组ID集合。
     */
    SecurityGroupIds: string[];
}
