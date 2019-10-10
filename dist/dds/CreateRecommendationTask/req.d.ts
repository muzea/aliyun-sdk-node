interface CreateRecommendationTaskRequest {
    /**
    * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH</i>Z（UTC时间）。
    * > **StartTime**参数取值必须晚于审计日志的开启时间。
    * @example `2019-01-01T12Z`
    */ "StartTime": string;
    /**
    * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH</i>Z（UTC时间）。
    * > 查询的时间范围为7天内。
    * @example `2019-01-01T18Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
    * @example `dds-bpxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 分片集群实例中Shard节点ID。
    * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
    * @example `d-bpxxxxxxxx`
    */ "NodeId"?: string;
}
export { CreateRecommendationTaskRequest };