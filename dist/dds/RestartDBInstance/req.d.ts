interface RestartDBInstanceRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 分片集群实例中Shard节点ID或Mongos节点ID。
    * > 当实例类型为分片集群实例时，如不传入本参数，则重启分片集群实例。
    * @example `d-bpxxxxxxxx`
    */ "NodeId"?: string;
}
export { RestartDBInstanceRequest };