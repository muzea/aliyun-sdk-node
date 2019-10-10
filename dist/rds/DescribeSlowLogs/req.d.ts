interface DescribeSlowLogsRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 查询开始日期，格式：<i>yyyy-MM-dd</i>Z。
    * @example `2011-05-01Z`
    */ "StartTime": string;
    /**
    * 查询结束日期，不能小于查询开始日期，与查询开始日期间隔不超过31天。格式：<i>yyyy-MM-dd</i>Z。
    * @example `2011-05-30Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 数据库名称。
    * @example `RDS_MySQL`
    */ "DBName"?: string;
    /**
    * 排序依据，取值：
    * * **TotalExecutionCounts**：总执行次数最多；
    * * **TotalQueryTimes**：总执行时间最多；
    * * **TotalLogicalReads**：总逻辑读最多；
    * * **TotalPhysicalReads**：总物理读最多。
    * >仅SQL Server 2008 R2实例支持本参数。
    * @example `TotalExecutionCounts`
    */ "SortKey"?: string;
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
export { DescribeSlowLogsRequest };