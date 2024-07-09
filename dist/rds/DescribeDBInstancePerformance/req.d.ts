export interface DescribeDBInstancePerformanceRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example ` rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 想要查询的性能指标，多个值用半角逗号（,）分隔，最多传入30个。详细参数请参见[性能参数表](~~26316~~)。
     * >**Key**为**MySQL_SpaceUsage**或**SQLServer_SpaceUsage**时，仅支持查询1天内的监控数据。
     * @example `MySQL_NetworkTraffic`
     */
    "Key": string;
    /**
     * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * >开始和结束时间间隔需要大于您实例的监控频率，否则可能返回空列表。
     * @example `2012-06-08T15:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * >开始和结束时间间隔需要大于您实例的监控频率，否则可能返回空列表。
     * @example `2012-06-18T15:00Z`
     */
    "EndTime": string;
    /**
     * 实例的唯一标识。
     * @example `339****`
     */
    "NodeId"?: string;
}
