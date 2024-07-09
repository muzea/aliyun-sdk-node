export interface StartShiftLoadBalancerZonesRequest {
    /**
     * 可用区及交换机映射列表。
     * > 一次调用最多支持移除一个可用区。
     */
    "ZoneMappings": {
        /**
         * 可用区对应的交换机，每个可用区默认使用一台交换机和一个子网。
         * @example `vsw-bp1rmcrwg3erh1fh8****`
         */
        VSwitchId: string;
        /**
         * NLB实例的可用区ID。
         * > 一次调用最多支持移除一个可用区。
         * 您可以通过调用[DescribeZones](~~443890~~)接口获取可用区ID。
         * @example `cn-hangzhou-a`
         */
        ZoneId: string;
    }[];
    /**
     * NLB实例ID。
     * @example `nlb-83ckzc8d4xlp8o****`
     */
    "LoadBalancerId": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会移除可用区。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `true`
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
     * NLB实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
