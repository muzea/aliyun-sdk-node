interface DescribeSlowLogRecordsRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxx`
    */ "DBInstanceId": string;
    /**
    * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
    * @example `2011-06-01T16:00Z`
    */ "StartTime": string;
    /**
    * 查询结束时间，需要大于查询开始时间，与查询开始时间间隔小于31天。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
    * @example `2011-06-20T16:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 慢日志统计里的SQL语句唯一标识符，可用于获取该SQL语句的慢日志明细。
    * @example `U2FsdGVkxxxx`
    */ "SQLHASH"?: string;
    /**
    * 数据库名称。
    * @example `RDS_MySQL`
    */ "DBName"?: string;
    /**
    * 每页记录数，取值：
    * * **30**；
    * * **50**；
    * * **100**。
    * 默认值：**30**。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 页码，取值：大于0且不超过Integer的最大值。
    * 默认值：**1**。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeSlowLogRecordsRequest };