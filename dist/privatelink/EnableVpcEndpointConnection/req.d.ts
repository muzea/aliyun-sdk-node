export interface EnableVpcEndpointConnectionRequest {
    /**
     * 要接受的终端节点连接的地域ID。
     * 您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会接受连接请求。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接接受连接请求。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 终端节点服务ID。
     * @example `epsrv-hp3vpx8yqxblby3i****`
     */
    "ServiceId": string;
    /**
     * 终端节点ID。
     * @example `ep-hp33b2e43fays7s8****`
     */
    "EndpointId": string;
    /**
     * 终端节点的连接带宽。单位：Mbps。取值范围：**3072~10240**。
     * >终端节点的连接带宽取值范围为 **100~10240**，默认为**3072** Mbps，当终端节点与终端节点服务进行连接时，则取默认带宽值为最小带宽值，此时，取值范围为**3072~10240**。当传统型负载均衡CLB或应用型负载均衡ALB作为服务资源时，您可以根据实际业务需要修改终端节点连接带宽。网络型负载均衡NLB不支持限速。
     * @example `3072`
     */
    "Bandwidth"?: number;
}
