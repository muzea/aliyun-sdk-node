export interface DeleteDBResourcePoolRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查询目标地域中所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterId": string;
    /**
     * 资源组名称。
     * @example `test_group`
     */
    "PoolName": string;
}
