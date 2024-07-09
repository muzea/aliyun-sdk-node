export interface GetVpcEndpointServiceAttributeResponse {
    /**
     * 付费方，取值：
     * - **Endpoint**：服务使用方。
     * - **EndpointService**：服务提供方。
     * @example `Endpoint`
     */
    Payer: string;
    /**
     * 请求ID。
     * @example `8D8992C1-6712-423C-BAC5-E5E817484C6B`
     */
    RequestId: string;
    /**
     * 终端节点服务的描述信息。
     * @example `This is my EndpointService.`
     */
    ServiceDescription: string;
    /**
     * 终端节点服务的创建时间。
     * @example `2020-01-02T19:11:12Z`
     */
    CreateTime: string;
    /**
     * 终端节点连接的最大带宽。单位：Mbps。
     * @example `1024`
     */
    MaxBandwidth: number;
    /**
     * 终端节点连接的最小带宽。单位：Mbps。
     * @example `100`
     */
    MinBandwidth: number;
    /**
     * 终端节点服务的服务域名。
     * @example `epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com`
     */
    ServiceDomain: string;
    /**
     * 是否自动接受终端节点连接，取值：
     * - **true**：自动接受终端节点连接。
     * - **false**：不自动接受终端节点连接。
     * @example `true`
     */
    AutoAcceptEnabled: boolean;
    /**
     * 是否支持连接服务的终端节点域名就近解析。取值：
     * - **true**（默认值）：是。
     * - **false**：否。
     * @example `true`
     */
    ZoneAffinityEnabled: boolean;
    /**
     * 终端节点服务的ID。
     * @example `epsrv-hp3vpx8yqxblby3i****`
     */
    ServiceId: string;
    /**
     * 服务资源所属的可用区列表。
     */
    Zones: string[];
    /**
     * 终端节点服务的业务状态，取值：
     * - **Normal**：正常。
     * - **FinancialLocked**：欠费锁定。
     * @example `Normal`
     */
    ServiceBusinessStatus: string;
    /**
     * 终端节点服务的名称。
     * @example `com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****`
     */
    ServiceName: string;
    /**
     * 终端节点服务的状态，取值：
     * - **Creating**：创建中。
     * - **Pending**：修改中。
     * - **Active**：可用。
     * - **Deleting**：删除中。
     * @example `Active`
     */
    ServiceStatus: string;
    /**
     * 默认连接带宽峰值。单位：Mbps。取值范围：**100~10240**。
     * @example `3072`
     */
    ConnectBandwidth: number;
    /**
     * 终端节点服务所属的地域。
     * @example `cn-huhehaote`
     */
    RegionId: string;
    /**
     * 终端节点类型。
     * 仅取值： **Interface**，表示接口终端节点，您可以添加传统型负载均衡CLB（Classic Load Balancer）、应用型负载均衡ALB（Application Load Balancer）和网络型负载均衡NLB（Network Load Balancer ）的服务资源类型。
     * @example `Interface`
     */
    ServiceType: string;
    /**
     * 服务资源类型，取值：
     * - **slb**：表示服务资源类型为传统型负载均衡CLB（Classic Load Balancer）。
     * -  **alb**：表示服务资源类型为应用型负载均衡ALB（Application Load Balancer）。
     * - **nlb** ：表示服务资源类型为网络型负载均衡NLB（Network Load Balancer ）。
     * @example `slb`
     */
    ServiceResourceType: string;
    /**
     * 终端节点是否支持IPv6功能。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    ServiceSupportIPv6: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmy*****`
     */
    ResourceGroupId: string;
}
