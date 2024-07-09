export interface AttachResourceToVpcEndpointServiceRequest {
    /**
     * 要添加服务资源的终端节点服务所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务资源类型。取值：
     * - **slb**：表示服务资源类型为传统型负载均衡CLB（Classic Load Balancer）。
     * - **alb**：表示服务资源类型为应用型负载均衡ALB（Application Load Balancer）。
     * - **nlb**：表示服务资源类型为网络型负载均衡NLB（Network Load Balancer ）。
     * > 不支持访问NLB的TCPSSL类型监听。
     * @example `slb`
     */
    "ResourceType": string;
    /**
     * 服务资源ID。
     * @example `lb-hp32z1wp5peaoox2q****`
     */
    "ResourceId": string;
    /**
     * 服务资源所属的可用区。
     * @example `cn-hangzhou-j`
     */
    "ZoneId"?: string;
    /**
     * 要添加服务资源的终端节点服务。
     * @example `epsrv-hp3vpx8yqxblby3i****`
     */
    "ServiceId": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会添加服务资源。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
}
