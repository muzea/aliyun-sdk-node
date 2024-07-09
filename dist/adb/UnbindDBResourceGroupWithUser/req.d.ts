export interface UnbindDBResourceGroupWithUserRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查询目标地域中所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp1ub9grke1****`
     */
    "DBClusterId": string;
    /**
     * 资源组名称。
     * @example `test`
     */
    "GroupName": string;
    /**
     * 绑定的数据库账号。
     * @example `accout`
     */
    "GroupUser": string;
}
