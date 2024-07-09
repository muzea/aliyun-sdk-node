export interface UpdateLoadBalancerAttributeRequest {
    /**
     * 网络型负载均衡实例的ID。
     * @example `nlb-wb7r6dlwetvt5j****`
     */
    "LoadBalancerId": string;
    /**
     * 网络型负载均衡实例名称。
     * 长度为2~128个英文或中文字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `NLB1`
     */
    "LoadBalancerName"?: string;
    /**
     * 网络型负载均衡实例是否开启跨可用区。取值：
     * - **true**：开启。
     * - **false**：关闭。
     * @example `false`
     */
    "CrossZoneEnabled"?: boolean;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会更新实例信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
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
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 网络型负载均衡实例的每秒新建连接限速值。取值范围：**1**~**1000000**。
     * @example `1`
     */
    "Cps"?: number;
}
