export interface BindDBResourceGroupWithUserRequest {
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
     * 需要绑定的数据库账号。既可以绑定数据库普通账号，也可以绑定数据库高权限账号。
     * @example `accout`
     */
    "GroupUser": string;
}
