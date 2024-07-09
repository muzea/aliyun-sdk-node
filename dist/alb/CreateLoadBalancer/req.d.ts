export interface CreateLoadBalancerRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建应用型负载均衡实例。检查项包括是否填写了必需参数、请求格式和业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 应用型负载均衡实例的专有网络ID。
     * @example `vpc-bp1b49rqrybk45nio****`
     */
    "VpcId": string;
    /**
     * 应用型负载均衡的地址类型。取值：
     * - **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。
     * - **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
     * @example `Internet`
     */
    "AddressType": string;
    /**
     * 应用型负载均衡实例名称。
     * 长度为2~128个英文或中文字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `alb1`
     */
    "LoadBalancerName"?: string;
    /**
     * 是否开启删除保护。取值：
     * - **true**：开启。
     * - **false**（默认值）：关闭。
     * @example `false`
     */
    "DeletionProtectionEnabled"?: boolean;
    /**
     * 修改保护配置。
     */
    "ModificationProtectionConfig"?: {
        /**
         * 输入开启修改保护的原因。长度为2~128个英文或中文字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
         * >仅在`Status`为**ConsoleProtection**时该参数有效且合法。
         * @example `托管实例`
         */
        Reason: string;
        /**
         * 修改应用型负载均衡实例的修改保护状态。取值：
         * - **NonProtection**：不保护，表示不允许传入ModificationProtectionReason。如果配置了ModificationProtectionReason，则清空其配置信息。
         * - **ConsoleProtection**：控制台修改保护，此时允许传入ModificationProtectionReason。
         * > 当取值为**ConsoleProtection**，即开启修改保护后，用户不能通过负载均衡控制台修改实例配置，但可以通过调用API修改实例配置。
         * @example `ConsoleProtection`
         */
        Status: string;
    };
    /**
     * 可用区及交换机映射列表，至少指定2个可用区，最多支持添加10个可用区。
     */
    "ZoneMappings": {
        /**
         * 可用区对应的交换机，每个可用区只能使用一台交换机和一个子网。
         * @example `vsw-sersdf****`
         */
        VSwitchId: string;
        /**
         * 可用区ID。您可以通过调用[DescribeZones](~~36064~~)接口获取可用区ID对应的可用区的信息。
         * @example `cn-hangzhou-a`
         */
        ZoneId: string;
        /**
         * 公网实例绑定的EIP实例ID。
         * @example `eip-bp1aedxso6u80u0qf****`
         */
        AllocationId: string;
        /**
         * IPv4私网地址。
         * @example `192.168.10.1`
         */
        IntranetAddress: string;
    }[];
    /**
     * 地址模式。取值 ：
     * - **Fixed**：固定IP模式，表示使用固定的IP地址。
     * - **Dynamic**（默认）：动态IP模式，表示每个可用区动态分配IP地址。
     * @example `Dynamic`
     */
    "AddressAllocatedMode"?: string;
    /**
     * 企业资源组ID。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
    /**
     * 应用型负载均衡的版本，不同版本有不同功能限制和计费策略。取值：
     * - **Basic**：基础版。
     * - **Standard**：标准版。
     * - **StandardWithWaf**：WAF增强版。
     * @example `Standard`
     */
    "LoadBalancerEdition": string;
    /**
     * 应用型负载均衡实例计费配置。
     */
    "LoadBalancerBillingConfig": {
        /**
         * 实例的计费类型。
         * 仅取值**PostPay**：表示按量计费。
         * @example `PostPay`
         */
        PayType: string;
        /**
         * 公网类型实例关联的共享带宽包ID。
         * @example `cbwp-bp1vevu8h3ieh****`
         */
        BandwidthPackageId: string;
    };
    /**
     * 协议版本。取值：
     * - **IPv4**：IPv4类型。
     * - **DualStack**：双栈类型。
     * @example `IPv4`
     */
    "AddressIpVersion"?: string;
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `env`
         */
        Key: string;
        /**
         * 最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `product`
         */
        Value: string;
    }[];
}
