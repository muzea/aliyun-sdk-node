export interface DescribeDBInstancePerformanceRequest {
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID，该实例需为存储预留模式实例。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 性能指标，多个指标用英文半角“,”分隔，见[性能参数表](~~86943~~)。
     * @example `CpuUsage,MemoryUsage,Gpdb_SpaceUsage,Gpdb_IOPS,Gpdb_session`
     */
    "Key": string;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-07-08T03:47Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，需要大于查询开始时间，格式为<i>yyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-07-09T03:47Z`
     */
    "EndTime": string;
}
