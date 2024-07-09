export interface UpdateLoadBalancerAddressTypeConfigRequest {
    /**
     * 网络型负载均衡实例ID。
     * @example `nlb-83ckzc8d4xlp8o****`
     */
    "LoadBalancerId": string;
    /**
     * 目标网络类型。取值：
     * - **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。
     * - **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。
     * @example `Internet`
     */
    "AddressType": string;
    /**
     * 可用区及交换机映射列表，最多支持10个可用区。
     */
    "ZoneMappings"?: {
        /**
         * 可用区对应的交换机，每个可用区只能使用一台交换机和一个子网。
         * @example `vsw-bp10ttov87felojcn****`
         */
        VSwitchId: string;
        /**
         * 网络型负载均衡实例的可用区ID。
         * 您可以通过调用[DescribeZones](~~443890~~)接口获取可用区ID对应的可用区信息。
         * @example `cn-hangzhou-a`
         */
        ZoneId: string;
        /**
         * 弹性公网IP实例ID。
         * @example `eip-bp1aedxso6u80u0qf****`
         */
        AllocationId: string;
        /**
         * 公网EIP的类型。取值：
         * - **Common**：弹性公网IP，简称EIP。
         * - **Anycast**：任播弹性公网IP，简称Anycast EIP。
         * > **AddressType**配置为**Internet**时，需要配置该参数。
         * @example `Common`
         */
        EipType: string;
    }[];
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会更新实例的网络类型。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 网络型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
