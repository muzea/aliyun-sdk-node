interface DescribeAuditFilesRequest {
    /**
    * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    *  分片集群实例中Mongos节点ID或Shard节点ID。
    * > 如不传入则返回所有Mongos节点和Shard节点的审计日志。
    * @example `d-bpxxxxxxxx`
    */ "NodeId"?: string;
    /**
    * 每页记录数，取值： **30、50、100**，默认值为**30**。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 页码，取值为大于0且不超过Integer数据类型的的最大值，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeAuditFilesRequest };