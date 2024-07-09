export interface StartShiftLoadBalancerZonesRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898
    `
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会移除可用区。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回`HTTP_2xx`状态码并直接进行修改。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 应用型负载均衡实例ID。
     * @example `alb-o9ulmq5hgn68jk****
    `
     */
    "LoadBalancerId": string;
    /**
     * 可用区及交换机映射列表。
     * > 一次调用最多支持移除一个可用区。
     */
    "ZoneMappings": {
        /**
         * 可用区对应的交换机，每个可用区默认使用一台交换机和一个子网。
         * @example `vsw-bp1rmcrwg3erh1fh8****
        `
         */
        VSwitchId: string;
        /**
         * 可用区ID，通过调用[DescribeZones](~~189196~~)接口获得。
         * @example `cn-hangzhou-a`
         */
        ZoneId: string;
    }[];
}
