export interface AttachCommonBandwidthPackageToLoadBalancerRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-42665*****`
     */
    "ClientToken"?: string;
    /**
     * 应用型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 应用型负载均衡实例ID。
     * @example `alb-d676fho813rmu3****`
     */
    "LoadBalancerId": string;
    /**
     * 绑定的共享带宽包ID。
     * @example `cbwp-bp1pzf0ym72pu3y76****`
     */
    "BandwidthPackageId": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会将共享带宽包绑定到负载均衡实例。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
}
