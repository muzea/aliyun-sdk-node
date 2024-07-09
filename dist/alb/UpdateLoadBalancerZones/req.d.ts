export interface UpdateLoadBalancerZonesRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会修改应用型负载均衡实例可用区属性。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回`HTTP_2xx`状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 应用型负载均衡实例ID。
     * @example `alb-o9ulmq5hgn68jk****`
     */
    "LoadBalancerId": string;
    /**
     * 可用区及交换机映射列表，至少指定两个可用区。如果指定，则会替换之前的可用区配置。
     */
    "ZoneMappings": {
        /**
         * 可用区对应的交换机，每个可用区默认使用一台交换机和一个子网。最多支持添加10个可用区。
         * @example `vsw-bp1rmcrwg3erh1fh8****`
         */
        VSwitchId: string;
        /**
         * 可用区名称，通过调用[DescribeZones](~~189196~~)接口获得。最多支持添加10个可用区。
         * @example `cn-hangzhou-a`
         */
        ZoneId: string;
        /**
         * IPv4私网地址。至少需要添加2个可用区，最多支持添加10个可用区。
         * @example `192.168.10.1`
         */
        IntranetAddress: string;
    }[];
}
