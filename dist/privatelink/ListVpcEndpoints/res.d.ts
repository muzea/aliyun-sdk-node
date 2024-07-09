export interface ListVpcEndpointsResponse {
    /**
     * 终端节点信息集合。
     */
    Endpoints: {
        /**
         * 终端节点所属的专有网络。
         * @example `vpc-hp356stwkxg3fn2xe****`
         */
        VpcId: string;
        /**
         * 终端节点名称。
         * @example `test`
         */
        EndpointName: string;
        /**
         * 终端节点类型。
         * 仅取值： **Interface**，表示接口终端节点，您可以添加应用型负载均衡ALB（Application Load Balancer）、传统型负载均衡CLB（Classic Load Balancer）和网络型负载均衡NLB（Network Load Balancer ）的服务资源类型。
         * @example `Interface`
         */
        EndpointType: string;
        /**
         * 终端节点的创建时间。
         * @example `2021-09-24T18:00:07Z`
         */
        CreateTime: string;
        /**
         * 终端节点关联的终端节点服务的ID。
         * @example `epsrv-hp3vpx8yqxblby3i****`
         */
        ServiceId: string;
        /**
         * 是否支持连接服务的终端节点域名就近解析。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        ZoneAffinityEnabled: boolean;
        /**
         * 终端节点域名。
         * @example `ep-hp33b2e43fays7s8****.epsrv-hp3xdsq46ael67lo****.cn-huhehaote.privatelink.aliyuncs.com`
         */
        EndpointDomain: string;
        /**
         * 终端节点状态，取值：
         * - **Creating**：创建中。
         * - **Active**：可用。
         * - **Pending**：修改中。
         * - **Deleting**：删除中。
         * @example `Active`
         */
        EndpointStatus: string;
        /**
         * 终端节点所属的地域ID。
         * @example `cn-huhehaote`
         */
        RegionId: string;
        /**
         * 终端节点和终端节点服务是否同一账号，取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        ResourceOwner: boolean;
        /**
         * 终端节点的连接带宽，单位：Mbps。
         * @example `1024`
         */
        Bandwidth: number;
        /**
         * 终端节点连接状态，取值：
         * - **Pending**：修改中。
         * - **Connecting**：连接中。
         * - **Connected**：已连接。
         * - **Disconnecting**：断开连接中。
         * - **Disconnected**：未连接。
         * - **Deleting**：删除中。
         * - **ServiceDeleted**：终端节点对应的服务已删除。
         * @example `Disconnected`
         */
        ConnectionStatus: string;
        /**
         * 终端节点描述。
         * @example `This is my Endpoint.`
         */
        EndpointDescription: string;
        /**
         * 终端节点ID。
         * @example `ep-hp33b2e43fays7s8****`
         */
        EndpointId: string;
        /**
         * 终端节点的业务状态。取值：
         * - **Normal**：正常。
         * - **FinancialLocked**：欠费锁定。
         * @example `Normal`
         */
        EndpointBusinessStatus: string;
        /**
         * 终端节点关联的终端节点服务的名称。
         * @example `com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo****`
         */
        ServiceName: string;
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
         * 资源实例ID。
         * @example `1`
         */
        ResourceGroupId: string;
        PolicyDocument: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 总记录数。
     * @example `12`
     */
    TotalCount: number;
}
