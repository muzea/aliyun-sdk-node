export interface ListVpcEndpointServicesResponse {
    /**
     * 终端节点服务集合。
     */
    Services: {
        /**
         * 是否自动接受终端节点连接，取值：
         * - **true**：自动接受终端节点连接。
         * - **false**：不自动接受终端节点连接。
         * @example `true`
         */
        AutoAcceptEnabled: boolean;
        /**
         * 终端节点服务的ID。
         * @example `epsrv-hp3vpx8yqxblby3i****`
         */
        ServiceId: string;
        /**
         * 终端节点服务的创建时间。
         * @example `2021-09-24T17:15:10Z`
         */
        CreateTime: string;
        /**
         * 终端节点连接的最小带宽。单位：Mbps。
         * @example `100`
         */
        MinBandwidth: number;
        /**
         * 终端节点连接的最大带宽。单位：Mbps。
         * @example `1024`
         */
        MaxBandwidth: number;
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
         * 是否支持可用区就近解析，取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        ZoneAffinityEnabled: boolean;
        /**
         * 终端节点服务所属的地域。
         * @example `cn-huhehaote`
         */
        RegionId: string;
        /**
         * 终端节点服务的服务域名。
         * @example `epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com`
         */
        ServiceDomain: string;
        /**
         * 付费方，取值：
         * - **Endpoint**：服务使用方。
         * - **EndpointService**：服务提供方。
         * @example `Endpoint`
         */
        Payer: string;
        /**
         * 终端节点服务的业务状态，取值：
         * - **Normal**：正常。
         * - **FinancialLocked**：欠费锁定。
         * @example `Normal`
         */
        ServiceBusinessStatus: string;
        /**
         * 默认连接带宽峰值。单位：Mbps。
         * @example `1024`
         */
        ConnectBandwidth: number;
        /**
         * 终端节点服务的名称。
         * @example `com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****`
         */
        ServiceName: string;
        /**
         * 终端节点服务的描述信息。
         * @example `This is my EndpointService.`
         */
        ServiceDescription: string;
        /**
         * 服务资源类型，取值：
         * - **slb**：表示服务资源类型为传统型负载均衡CLB（Classic Load Balancer）。
         * - **alb**：表示服务资源类型为应用型负载均衡ALB（Application Load Balancer）。
         * - **nlb** ：表示服务资源类型为网络型负载均衡NLB（Network Load Balancer ）。
         * @example `slb`
         */
        ServiceResourceType: string;
        /**
         * 终端节点服务类型，取值：
         * - **Interface**：表示**ServiceResourceType**为**slb**（传统型负载均衡CLB）、**alb**（应用型负载均衡ALB）、**nlb**（网络型负载均衡NLB）时的终端节点服务类型。
         * @example `Interface`
         */
        ServiceType: string;
        /**
         * 终端节点服务是否支持IPv6功能。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        ServiceSupportIPv6: boolean;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 实例的标签键。
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 实例的标签值。
             * @example `FinanceJoshua`
             */
            Value: string;
        }[];
        /**
         * 资源组ID。
         * @example `rg-acfmy*****`
         */
        ResourceGroupId: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 总记录数。
     * @example `12`
     */
    TotalCount: number;
}
