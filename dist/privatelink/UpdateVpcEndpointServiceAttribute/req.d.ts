export interface UpdateVpcEndpointServiceAttributeRequest {
    /**
     * 终端节点服务所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会修改资源属性。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP
     *  2xx状态码并直接修改资源属性。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 终端节点服务的ID。
     * @example `epsrv-hp3vpx8yqxblby3i****`
     */
    "ServiceId": string;
    /**
     * 终端节点服务的描述信息。
     * @example `This is my EndpointService.`
     */
    "ServiceDescription"?: string;
    /**
     * 是否自动接受终端节点连接，取值：
     * - **true**：自动接受终端节点连接。
     * - **false**：不自动接受终端节点连接。
     * @example `false`
     */
    "AutoAcceptEnabled"?: boolean;
    /**
     * 默认连接带宽峰值。默认值：**3072**。单位：Mbps。
     * 取值范围：**100**~**10240**。
     * > 当服务资源为传统型负载均衡CLB或应用型负载均衡ALB时，支持设置默认连接带宽峰值；当服务资源为网络型负载均衡NLB时，不支持设置连接带宽。
     * @example `3072`
     */
    "ConnectBandwidth"?: number;
    /**
     * 是否支持连接服务的终端节点域名就近解析。取值：
     * - **true**（默认值）：是。
     * - **false**：否。
     * @example `true`
     */
    "ZoneAffinityEnabled"?: boolean;
    /**
     * 终端节点服务是否支持IPv6功能。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "ServiceSupportIPv6"?: boolean;
}
