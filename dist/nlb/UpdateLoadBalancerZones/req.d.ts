export interface UpdateLoadBalancerZonesRequest {
    /**
     * 网络型负载均衡实例ID。
     * @example `nlb-83ckzc8d4xlp8o****`
     */
    "LoadBalancerId": string;
    /**
     * 可用区及交换机映射列表，最多支持添加10个可用区。
     */
    "ZoneMappings": {
        /**
         * 可用区对应的交换机，每个可用区默认使用一台交换机和一个子网。
         * @example `vsw-bp1rmcrwg3erh1fh8****`
         */
        VSwitchId: string;
        /**
         * 可用区ID，您可以通过调用[DescribeZones](~~443890~~)接口获取。
         * @example `cn-hangzhou-a`
         */
        ZoneId: string;
        /**
         * 私网IP地址。
         * @example `192.168.36.16`
         */
        PrivateIPv4Address: string;
        /**
         * 弹性公网IP或任播弹性公网IP的实例ID。
         * @example `eip-bp1aedxso6u80u0qf****`
         */
        AllocationId: string;
        /**
         * 公网EIP的类型。取值：
         * - **Common**：弹性公网IP，简称EIP。
         * - **Anycast**：任播弹性公网IP，简称Anycast EIP。
         * > 支持绑定Anycast EIP的地域见[使用限制
         * ](~~470000~~)，**AddressType**配置为**Internet**时，需要配置该参数。
         * @example `Common`
         */
        EipType: string;
    }[];
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会修改实例可用区属性。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP_2xx状态码并直接进行操作。
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
}
