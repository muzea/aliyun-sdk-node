interface DescribeAuditRecordsRequest {
    "RegionId"?: string;
    /**
    * 查询开始时间，格式：YYYY-MM-DDTHH:mm:ssZ。
    * @example `2019-03-24T12:10:00Z`
    */ "StartTime": string;
    /**
    * 查询结束时间，必须晚于查询开始时间，格式：YYYY-MM-DDTHH:mm:ssZ。
    * @example `2019-03-25T12:10:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 需要查询的实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 集群实例的子节点ID。
    * @example `r-bp1xxxxxxxxxxxxx-db-0`
    */ "NodeId"?: string;
    /**
    * 账号名称，默认为所有账号。
    * @example `demo`
    */ "AccountName"?: string;
    /**
    * 数据库名称。
    * @example `demo`
    */ "DatabaseName"?: string;
    /**
    * 根据指定的命令查询审计日志，默认查询所有执行过的命令。
    * > 只能传入单个关键词。
    * @example `maxclients`
    */ "QueryKeywords"?: string;
    /**
    * 客户端IP，默认为显示所有地址。
    * @example `127.0.0.1`
    */ "HostAddress"?: string;
    /**
    * 每页显示的最大记录数。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 当前显示的页码。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeAuditRecordsRequest };