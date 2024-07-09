export interface DescribeDBResourcePoolRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查询目标地域中所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp11q28kvl688****`
     */
    "DBClusterId": string;
    /**
     * 资源组名称。
     * @example `USER_DEFAULT`
     */
    "PoolName"?: string;
}
