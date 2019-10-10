interface DescribeBackupsRequest {
    /**
    * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
    * @example `2019-03-12T12:00Z`
    */ "StartTime": string;
    /**
    * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
    * @example `2019-03-13T12:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 分片集群实例中Shard节点ID。
    * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
    * @example `d-bpxxxxxxxx`
    */ "NodeId"?: string;
    /**
    * 备份ID。
    * @example `5664xxxx`
    */ "BackupId"?: string;
    /**
    * 页码，取值为大于0且不超过Integer数据类型的的最大值，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页记录数，取值： **30、50、100**，默认值为**30**。
    * @example `30`
    */ "PageSize"?: number;
}
export { DescribeBackupsRequest };