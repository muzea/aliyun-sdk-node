export interface ResetIMVMonitorDataRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp152460513z****`
     */
    "DBInstanceId": string;
    /**
     * 数据库名称。
     * @example `testdb`
     */
    "Database": string;
}
