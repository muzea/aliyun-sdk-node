interface DescribeIndexRecommendationRequest {
    /**
    * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "InstanceId": string;
    "OwnerId"?: number;
    /**
    * 任务ID，您可以通过调用[DescribeAvailableTimeRange](~~95534~~)接口查询。
    * @example `3223069`
    */ "TaskId"?: string;
    /**
    * 分片集群实例中Mongos节点ID或Shard节点ID。
    * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
    * @example `d-bpxxxxxxxx`
    */ "NodeId"?: string;
    /**
    * 数据库名。
    * @example `mongodbtest`
    */ "Database"?: string;
    /**
    * 集合名。
    * @example `customer`
    */ "Collection"?: string;
    /**
    * 查询开始时间，格式为<i>HH:mm</i>Z-<i>HH</i>Z（UTC时间）。
    * > **StartTime**取值必须晚于审计日志的开启时间。
    * @example `2019-01-01T12Z`
    */ "StartTime"?: string;
    /**
    * 查询结束时间，必须晚于查询开始时间，格式为<i>HH:mm</i>Z-<i>HH</i>Z（UTC时间）。
    * @example `2019-01-02T13Z`
    */ "EndTime"?: string;
    /**
    * 操作类型，例如**query**、**delete**、**update**等。
    * @example `query`
    */ "OperationType"?: string;
    /**
    * 每页记录数，取值： **30**、**50**、**100**，默认值为**30**。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 页码，取值为大于0且不超过Integer数据类型的的最大值，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeIndexRecommendationRequest };