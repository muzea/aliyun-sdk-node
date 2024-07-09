export interface GetVpcGatewayEndpointAttributeResponse {
    /**
     * 请求ID。
     * @example `A1122D0F-7B3B-5445-BB19-17F27F97FE1C`
     */
    RequestId: string;
    /**
     * 网关终端节点实例ID。
     * @example `vpce-bp1w1dmdqjpwul0v3****`
     */
    EndpointId: string;
    /**
     * 网关终端节点的名称。
     * @example `test`
     */
    EndpointName: string;
    /**
     * 网关终端节点的描述信息。
     * @example `test`
     */
    EndpointDescription: string;
    /**
     * 终端节点服务名称。
     * @example `com.aliyun.cn-hangzhou.oss`
     */
    ServiceName: string;
    /**
     * 网关终端节点所在的VPC ID。
     * @example `vpc-bp1nh86rugg01zol0****`
     */
    VpcId: string;
    /**
     * 云服务的访问策略。
     * @example `{"Version" : "1",   "Statement" : [ {     "Effect" : "Allow",     "Resource" : [ "*" ],     "Action" : [ "*" ],     "Principal" : [ "*" ]   } ] }`
     */
    PolicyDocument: string;
    /**
     * 网关终端节点的创建时间。按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-08-27T01:58:37Z`
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
    RouteTables: string[];
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
}
