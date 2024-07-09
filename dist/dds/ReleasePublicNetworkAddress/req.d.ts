export interface ReleasePublicNetworkAddressRequest {
    /**
     * 实例ID。
     * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
     * @example `dds-bp2235****`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中Mongos节点ID、Shard节点ID或ConfigServer节点ID。
     * > - 当**DBInstanceId**传入的是分片集群实例ID时，本参数才可用。
     * > - 您可以调用[DescribeDBInstanceAttribute](~~62010~~)接口查询Mongos/Shard/ConfigServer节点ID。
     * @example `s-bp2235****`
     */
    "NodeId"?: string;
    /**
     * 公网地址类型，可选值：
     * - **SRV**
     * - **Normal**
     * >当释放的连接地址是SRV地址时，本参数才可用。
     * @example `SRV`
     */
    "ConnectionType"?: string;
}
