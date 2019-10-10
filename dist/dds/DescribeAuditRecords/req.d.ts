interface DescribeAuditRecordsRequest {
    /**
    * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
    * @example `2019-03-13T12:11:14Z`
    */ "StartTime": string;
    /**
    * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
    * @example `2019-03-13T13:11:14Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 分片集群实例中Mongos节点ID或Shard节点ID。
    * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
    * @example `d-bpxxxxxxxx`
    */ "NodeId"?: string;
    /**
    * 数据库名，默认为所有数据库。
    * @example `testdatabase`
    */ "Database"?: string;
    /**
    * 数据库账号，默认为所有账号。
    * @example `root`
    */ "User"?: string;
    /**
    * 审计记录返回的展示类型，取值：
    * - **File**：触发审计日志文件的生成，若传入这个值，只返回公共参数，需再调用[DescribeAuditFiles](~~62162~~)获取文件的下载地址。
    * - **Stream**：返回数据流。
    * 默认为**Stream**。
    * @example `Stream`
    */ "Form"?: string;
    /**
    * 关键字查询，多个关键字以空格分隔，不超过10个关键字。
    * @example `slow`
    */ "QueryKeywords"?: string;
    /**
    * 每页记录数，取值：**30**、**50**、**100**，默认值为**30**。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 页码，大于0，且不超过Integer的最大值，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeAuditRecordsRequest };