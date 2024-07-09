export interface ListVpcEndpointServicesByEndUserResponse {
    /**
     * 终端节点服务集合。
     */
    Services: {
        /**
         * 付费方，取值：
         * - **Endpoint**：服务使用方。
         * - **EndpointService**：服务提供方。
         * @example `Endpoint`
         */
        Payer: string;
        /**
         * 创建终端节点时可以关联的终端节点服务的域名。
         * @example `epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com`
         */
        ServiceDomain: string;
        /**
         * 创建终端节点时可以关联的终端节点服务的可用区集合。
         */
        Zones: string[];
        /**
         * 创建终端节点时可以关联的终端节点服务的ID。
         * @example `epsrv-hp3vpx8yqxblby3i****`
         */
        ServiceId: string;
        /**
         * 创建终端节点时可以关联的终端节点服务的名称。
         * @example `com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****`
         */
        ServiceName: string;
        /**
         * 终端节点服务类型。
         * 仅取值： **Interface**，表示接口终端节点，您可以添加应用型负载均衡ALB（Application Load Balancer）、传统型负载均衡CLB（Classic Load Balancer）和网络型负载均衡NLB（Network Load Balancer ）的服务资源类型。
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
        /**
         * 服务资源类型。
         * - **slb**，表示服务资源类型为传统型负载均衡CLB（Classic Load Balancer）。
         * - **alb**，表示服务资源类型为应用型负载均衡ALB（Application Load Balancer）。
         * - **nlb**，表示服务资源类型为网络型负载均衡NLB（Network Load Balancer ）。
         * @example `slb`
         */
        ServiceResourceType: string;
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
     * @example `29`
     */
    TotalCount: string;
}
