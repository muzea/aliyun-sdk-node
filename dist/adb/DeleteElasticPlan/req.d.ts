export interface DeleteElasticPlanRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~612241~~)接口查询目标地域中所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp1xxxxxxxx47`
     */
    "DBClusterId": string;
    /**
     * 弹性计划名称。
     * > 调用[DescribeElasticPlans](~~601334~~)接口可以查看集群的弹性计划名称。
     * @example `test`
     */
    "ElasticPlanName": string;
}
