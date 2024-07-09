export interface CreateVpcEndpointServiceRequest {
    /**
     * 终端节点服务所在的地域ID。
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
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建资源。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 终端节点服务的描述信息。
     * @example `This is my EndpointService.`
     */
    "ServiceDescription"?: string;
    /**
     * 是否自动接受终端节点连接，取值：
     * - **true**：自动接受终端节点连接。
     * - **false**（默认值）：不自动接受终端节点连接。
     * @example `false`
     */
    "AutoAcceptEnabled"?: boolean;
    /**
     * 付费方，取值：
     * - **Endpoint**：服务使用方。
     * - **EndpointService**：服务提供方。
     * @example `Endpoint`
     */
    "Payer"?: string;
    /**
     * 是否支持连接服务的终端节点域名就近解析，取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "ZoneAffinityEnabled"?: boolean;
    /**
     * 服务资源类型。取值：
     * - **slb** ：表示服务资源类型为传统型负载均衡CLB（Classic Load Balancer）。
     * - **alb** ：表示服务资源类型为应用型负载均衡ALB（Application Load Balancer）。
     * - **nlb** ：表示服务资源类型为网络型负载均衡NLB（Network Load Balancer ）。
     * > 不支持访问NLB的TCPSSL类型监听。
     * @example `slb`
     */
    "ServiceResourceType"?: string;
    /**
     * 终端节点服务资源合集。
     */
    "Resource"?: {
        /**
         * 添加到终端节点服务中的服务资源的类型，一个终端节点服务最多支持添加20个服务资源。取值：
         * - **slb** ：表示服务资源类型为传统型负载均衡CLB（Classic Load Balancer）。
         * - **alb** ：表示服务资源类型为应用型负载均衡ALB（Application Load Balancer）。
         * - **nlb** ：表示服务资源类型为网络型负载均衡NLB（Network Load Balancer ）。
         * > 在支持私网连接功能的地域内，专有网络类型的传统型负载均衡CLB实例均支持作为终端节点服务的服务资源。不支持访问NLB的TCPSSL类型监听。
         * @example `slb`
         */
        ResourceType: string;
        /**
         * 添加到终端节点服务中的服务资源ID。最多支持20个资源ID。
         * @example `lb-hp32z1wp5peaoox2q****`
         */
        ResourceId: string;
        /**
         * 可用区ID。
         * @example `cn-huhehaote-a`
         */
        ZoneId: string;
    }[];
    /**
     * 终端节点服务是否支持IPv6功能。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "ServiceSupportIPv6"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 实例的标签键。最多支持20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `env`
         */
        Key: string;
        /**
         * 实例的标签值。最多支持20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `prod`
         */
        Value: string;
    }[];
}
