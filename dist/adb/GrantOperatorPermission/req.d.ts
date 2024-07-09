export interface GrantOperatorPermissionRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查询集群ID。
     * @example `am-bp1565u55p32****`
     */
    "DBClusterId": string;
    /**
     * 服务账号权限过期时间。UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2022-11-30T00:00:00Z`
     */
    "ExpiredTime": string;
    /**
     * 权限名称。取值说明：
     * - **Control**：配置权限，查看和修改集群配置。
     * - **Data**：数据权限，查看表结构、索引和SQL。
     * @example `Control`
     */
    "Privileges": string;
}
