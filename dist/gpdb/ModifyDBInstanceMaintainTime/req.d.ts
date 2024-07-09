export interface ModifyDBInstanceMaintainTimeRequest {
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp***************`
     */
    "DBInstanceId": string;
    /**
     * 可维护的开始时间。格式：HH:mmZ（UTC时间）。
     * @example `02:00Z`
     */
    "StartTime": string;
    /**
     * 可维护的结束时间，需要大于开始时间。格式：HH:mmZ（UTC时间）。
     * @example `03:00Z`
     */
    "EndTime": string;
}
