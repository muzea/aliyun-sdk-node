interface DescribeRunningLogRecordsRequest {
    "RegionId"?: string;
    /**
    * 查询开始时间，格式：YYYY-MM-DDTHH:mmZ。
    * @example `2018-12-03T07:01Z`
    */ "StartTime": string;
    /**
    * 查询结束时间，必须大于查询开始时间，格式：YYYY-MM-DDTHH:mmZ。
    * @example `2018-12-03T08:01Z`
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
    * @example `demo`
    */ "DBName"?: string;
    /**
    * 节点角色，默认为master。
    * @example `master`
    */ "RoleType"?: string;
    /**
    * 每页显示的最大日志条目数。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 当前显示的页码。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeRunningLogRecordsRequest };