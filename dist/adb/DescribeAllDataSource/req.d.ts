export interface DescribeAllDataSourceRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~612241~~)接口查询目标地域中所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp1pke2pcfavw****`
     */
    "DBClusterId": string;
    /**
     * 数据库名称。
     *
     * @example `adb_demo`
     */
    "SchemaName": string;
    /**
     * 表名。
     * @example `test`
     */
    "TableName": string;
}
