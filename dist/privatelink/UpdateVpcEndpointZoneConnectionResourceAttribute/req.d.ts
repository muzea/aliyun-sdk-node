export interface UpdateVpcEndpointZoneConnectionResourceAttributeRequest {
    /**
     * 要修改的终端节点连接带宽的地域ID。
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
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改服务资源。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
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
     * 可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId": string;
    /**
     * 资源分配模式，只能在终端节点连接处于**已断开**时调整资源分配模式。取值：
     * - **Auto**：自动分配服务资源（随机分配），此时会清除已经指定的服务资源。
     * - **Manual**：手动分配服务资源，此时必须输入**ResourceId**和**ResourceType**参数。
     * @example `Auto`
     */
    "ResourceAllocateMode"?: string;
    /**
     * 服务资源迁移方式。取值：
     * - **Graceful**：平滑迁移，此时可用区连接平滑迁移服务资源。
     * - **Force**：强制迁移，此时可用区连接强制迁移服务资源。
     * >只能在终端节点连接处于**已连接**且需要迁移服务资源时输入此参数，此时必须输入**ResourceId**和**ResourceType**参数。
     * @example `Graceful`
     */
    "ResourceReplaceMode"?: string;
    /**
     * 服务资源类型。取值：
     * - **slb**：表示服务资源类型为专有网络类型且支持PrivateLink功能的传统型负载均衡CLB（Classic Load Balancer）。
     * -  **alb**：表示服务资源类型为专有网络类型且支持PrivateLink功能的应用型负载均衡ALB（Application Load Balancer）。
     * > 当**ResourceAllocateMode**为**Manual**或指定**ResourceReplaceMode**参数时，此参数必选。
     * @example `slb`
     */
    "ResourceType"?: string;
    /**
     * 终端节点连接所在可用区手动分配或迁移的服务资源ID。
     * > 当**ResourceAllocateMode**为**Manual**或指定**ResourceReplaceMode**参数时，此参数必选。
     * @example `lb-hp32z1wp5peaoox2q****`
     */
    "ResourceId"?: string;
}
