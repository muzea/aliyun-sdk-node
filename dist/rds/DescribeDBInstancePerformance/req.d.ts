interface DescribeDBInstancePerformanceRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example ` rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 想要查询的性能指标，多个值用英文逗号（,）分隔，详细参数请参见[性能参数表](~~26316~~)。
    * >**Key**为**MySQL_SpaceUsage**或**SQLServer_SpaceUsage**时，仅支持查询1天内的监控数据。
    * @example `MySQL_Sessions`
    */ "Key": string;
    /**
    * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
    * @example `2012-06-08T15:00Z`
    */ "StartTime": string;
    /**
    * 查询结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
    * @example `2012-06-18T15:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
}
export { DescribeDBInstancePerformanceRequest };