export interface DescribeShardingNetworkAddressRequest {
    /**
     * 实例ID。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中Mongos节点ID、Shard节点ID或ConfigServer节点ID。
     * > 您可以调用[DescribeDBInstanceAttribute](~~62010~~)接口查询Mongos/Shard/ConfigServer节点ID。
     * @example `d-bpxxxxxxxx`
     */
    "NodeId"?: string;
}
