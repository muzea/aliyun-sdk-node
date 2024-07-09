export interface DescribeSQLPlanRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL集群的详情，包括集群ID。
     * @example `am-****************`
     */
    "DBClusterId": string;
    /**
     * 任务ID。
     * > 您可以调用[DescribeProcessList](~~612277~~)接口查看目标SQL的任务ID。
     * @example `202105271604431720161662490345*******`
     */
    "ProcessId": string;
}
