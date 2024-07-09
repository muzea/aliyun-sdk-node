export interface DescribeWaitingSQLInfoRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 进程ID，即等待查询SQL的唯一标识。
     * > 您可以调用[DescribeWaitingSQLRecords](~~461735~~)接口获取锁等待的查询的进程ID。
     * @example `100`
     */
    "PID": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "Database": string;
}
