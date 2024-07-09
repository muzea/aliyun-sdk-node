export interface ListVpcGatewayEndpointsResponse {
    /**
     * 请求ID。
     * @example `0AB1129F-32C1-5E4D-9E22-E4A859CA46EB`
     */
    RequestId: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 网关终端节点的列表。
     */
    Endpoints: {
        /**
         * 网关终端节点实例ID。
         * @example `vpce-bp1i1212ss2whuwyw****`
         */
        EndpointId: string;
        /**
         * 网关终端节点的名称。
         * @example `test`
         */
        EndpointName: string;
        /**
         * 网关终端节点的描述信息。
         * @example `test_description`
         */
        EndpointDescription: string;
        /**
         * 终端节点服务名称。
         * @example `com.aliyun.cn-hangzhou.oss`
         */
        ServiceName: string;
        /**
         * 网关终端节点所在的VPC ID。
         * @example `vpc-bp1gsk7h12ew7oegk****`
         */
        VpcId: string;
        /**
         * 云服务的访问策略。
         * 关于访问策略的语法和结构，请参见[权限策略语法和结构](~~93739~~)。
         * @example `{\n  \"Version\": \"1\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": \"*\",\n      \"Principal\": \"*\",\n      \"Resource\": \"*\"\n    }\n  ]\n}`
         */
        PolicyDocument: string;
        /**
         * 网关终端节点的创建时间。按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
         * @example `2021-09-08T08:43:04Z`
         */
        CreationTime: string;
        /**
         * 网关终端节点的状态。取值：
         * - **Creating**：创建中。
         * - **Created**：已创建，正常状态。
         * - **Modifying**：修改中。
         * - **Associating**：绑定中。
         * - **Dissociating**：解绑中。
         * - **Deleting**：删除中。
         * @example `Created`
         */
        EndpointStatus: string;
        /**
         * 网关终端节点关联的路由表ID。
         */
        AssociatedRouteTables: string[];
        /**
         * 网关终端节点所属的资源组ID。
         * @example `rg-acfmxvfvazb4p****`
         */
        ResourceGroupId: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 标签值。
             * @example `FinanceJoshua`
             */
            Value: string;
        }[];
    }[];
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
}
