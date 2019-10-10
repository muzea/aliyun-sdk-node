interface DescribeSlowLogRecordsRequest {
    "RegionId"?: string;
    /**
    * 查询开始时间，格式：YYYY-MM-DDTHH:mmZ。
    * @example `2019-03-10T14:11Z`
    */ "StartTime": string;
    /**
    * 查询结束时间，必须晚于查询开始时间，格式：YYYY-MM-DDTHH:mmZ。
    * @example `2019-03-22T14:11Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 需要查询的实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 集群子节点ID，查询集群实例的特定子节点时需传入此参数。
    * @example `r-bp1xxxxxxxxxxxxx-db-0`
    */ "NodeId"?: string;
    "SQLId"?: number;
    /**
    * 数据库名称。
    * @example `redisdemo`
    */ "DBName"?: string;
    /**
    * 每页显示的日志数上限。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 当前显示的页码。
    * @example `1`
    */ "PageNumber"?: number;
    "SlowLogRecordType"?: string;
    "QueryKeyword"?: string;
    "OrderType"?: string;
    "OrderBy"?: string;
}
export { DescribeSlowLogRecordsRequest };