interface DescribeDBInstancePerformanceRequest {
    /**
    * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 性能指标，取值详情请参见[性能参数表](~~64048~~)。
    * >如需传入多个指标使用英文逗号（,）分隔。
    * @example `MongoDB_DetailedSpaceUsage`
    */ "Key": string;
    /**
    * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
    * @example `2019-03-11T12:30Z`
    */ "StartTime": string;
    /**
    * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
    * @example `2019-03-11T12:30Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 分片集群实例中Mongos节点ID或Shard节点ID，可用于查询单个节点的性能情况。
    * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
    * @example `d-bpxxxxxxxx`
    */ "NodeId"?: string;
    /**
    * 实例的节点角色ID，可通过[DescribeReplicaSetRole](~~62134~~)接口查询。
    * > 当**DBInstanceId**参数传入的是单节点实例ID或副本集实例ID时，本参数才可用。
    * @example `60xxxxx`
    */ "RoleId"?: string;
    /**
    * 节点角色，取值：
    * - Primary：主节点。
    * - Secondary：从节点。
    * > 当**DBInstanceId**参数传入的是单节点实例，本参数的取值仅支持**Primary**。
    * @example `Primary`
    */ "ReplicaSetRole"?: string;
}
export { DescribeDBInstancePerformanceRequest };