export interface DescribeDiagnosisSQLInfoRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 查询ID，即查询的唯一标识。
     * > 您可以调用[DescribeDiagnosisRecords](~~450511~~)接口获取查询ID。
     * @example `71403480878****`
     */
    "QueryID": string;
    /**
     * 数据库名称。
     * @example `adbtest`
     */
    "Database": string;
}
