export interface AllocatePublicNetworkAddressRequest {
    /**
     * 实例ID。
     * > 当配置为分片集群实例ID时，还需要配置**NodeId**参数。
     * @example `dds-bp11483712c1****`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中Mongos节点ID、Shard节点ID或ConfigServer节点ID。您可以调用[DescribeDBInstanceAttribute](~~62010~~)接口查询Mongos节点、Shard节点或ConfigServer节点的节点ID。
     * > 当**DBInstanceId**配置的是分片集群实例ID时，需要配置该参数。
     * @example `s-bp18e6d84ae3****`
     */
    "NodeId"?: string;
}
