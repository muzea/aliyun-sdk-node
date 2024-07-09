export interface CreateLoadBalancerRequest {
    /**
     * 负载均衡的类型，仅取值：**network**，表示网络型负载均衡。
     * @example `network`
     */
    "LoadBalancerType"?: string;
    /**
     * 网络型负载均衡实例名称。
     * 长度为2~128个英文或中文字符，必须以大小写英文字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `NLB1`
     */
    "LoadBalancerName"?: string;
    /**
     * 网络型负载均衡实例的IPv4地址类型。取值：
     * - **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。
     * - **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
     * > 网络型负载均衡双栈实例的IPv6公网需通过[EnableLoadBalancerIpv6Internet](~~445878~~)接口开启。
     * @example `Internet`
     */
    "AddressType": string;
    /**
     * 协议版本。取值：
     * - **ipv4**（默认值）：IPv4类型。
     * - **DualStack**：双栈类型。
     * @example `ipv4`
     */
    "AddressIpVersion"?: string;
    /**
     * 网络型负载均衡实例的专有网络ID。
     * @example `vpc-bp1b49rqrybk45nio****`
     */
    "VpcId": string;
    /**
     * 可用区及交换机映射列表。至少需要添加2个可用区，最多支持添加10个可用区。
     */
    "ZoneMappings": {
        /**
         * 可用区对应的交换机，每个可用区只能使用一台交换机和一个子网。至少需要添加2个可用区，最多支持添加10个可用区。
         * @example `vsw-sersdf****`
         */
        VSwitchId: string;
        /**
         * 网络型负载均衡实例的可用区ID。至少需要添加2个可用区，最多支持添加10个可用区。
         * 您可以通过调用[DescribeZones](~~443890~~)接口获取可用区ID。
         * @example `cn-hangzhou-a`
         */
        ZoneId: string;
        /**
         * IPv4 私网VIP地址。NLB对外提供服务的私网IPv4地址。
         * @example `192.168.10.1`
         */
        PrivateIPv4Address: string;
        /**
         * 公网实例绑定的EIP实例ID，每个可用区对应1个EIP实例ID。至少需要添加2个可用区，最多支持添加10个可用区。
         * @example `eip-bp1aedxso6u80u0qf****`
         */
        AllocationId: string;
        /**
         * IPv6 VIP地址。NLB对外提供服务的IPv6地址。
         * @example `2408:400a:d5:3080:b409:840a:ca:e8e5`
         */
        Ipv6Address: string;
        /**
         * IPv4 Local地址列表。NLB与后端服务交互的地址列表。
         * 地址个数必须是偶数，且最少2个，最多8个。
         */
        Ipv4LocalAddresses: string[];
        /**
         * IPv6 Local地址列表。NLB与后端服务交互的地址列表。
         * 地址个数必须是偶数，且最少2个，最多8个。
         */
        Ipv6LocalAddresses: string[];
    }[];
    /**
     * 公网类型实例关联的共享带宽包ID。
     * @example `cbwp-bp1vevu8h3ieh****`
     */
    "BandwidthPackageId"?: string;
    /**
     * 网络型负载均衡实例计费配置。
     */
    "LoadBalancerBillingConfig"?: {
        /**
         * 网络型负载均衡实例的计费类型。
         * 仅取值**PostPay**：表示按量计费。
         * @example `PostPay`
         */
        PayType: string;
    };
    /**
     * 资源组ID。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 网络型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 删除保护配置。
     */
    "DeletionProtectionConfig"?: {
        /**
         * 删除保护状态，取值：
         * - **true**：开启状态。
         * - **false**（默认值）：关闭状态。
         * @example `false`
         */
        Enabled: boolean;
        /**
         * 更改删除保护状态的原因。长度为2~128个英文或中文字符，必须以大小写英文字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
         * @example `实例运行中`
         */
        Reason: string;
    };
    /**
     * 修改保护配置。
     */
    "ModificationProtectionConfig"?: {
        /**
         * 网络型负载均衡修改保护状态。取值：
         * - **NonProtection**：不保护，表示不允许传入保护配置的**Reason**。如果配置了保护配置的**Reason**，则清空其配置信息。
         * - **ConsoleProtection**：控制台修改保护，此时允许传入保护配置的**Reason**。
         * > 当取值为**ConsoleProtection**，即开启修改保护后，用户不能通过负载均衡控制台修改实例配置，但可以通过调用API修改实例配置。
         * @example `ConsoleProtection`
         */
        Status: string;
        /**
         * 输入开启修改保护的原因。长度为2~128个英文或中文字符，必须以大小写英文字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
         * > 仅在**Status**为**ConsoleProtection**时有效且合法。
         * @example `业务保障期`
         */
        Reason: string;
    };
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。支持字符包括字母、数字、下划线 (_)、点 (.)、冒号 (:)、斜线 (/)、等号 (=)、加号 (+)、减号 (-)、@符号 (@) 。
         * 一次调用最多支持添加20个标签。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。支持字符包括字母、数字、下划线 (_)、点 (.)、冒号 (:)、斜线 (/)、等号 (=)、加号 (+)、减号 (-)、@符号 (@) 。
         * 一次调用最多支持添加20个标签。
         * @example `product`
         */
        Value: string;
    }[];
}
