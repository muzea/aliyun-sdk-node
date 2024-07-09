export interface ReleaseNodePrivateNetworkAddressRequest {
    /**
     * 分片集群实例ID。
     * @example `dds-bp1a7009eb24****`
     */
    "DBInstanceId": string;
    /**
     * Shard节点或ConfigServer节点的ID。
     * > 您可以调用[DescribeDBInstanceAttribute](~~62010~~)接口查询Shard节点或ConfigServer节点的ID。
     * @example `d-bp128a003436****`
     */
    "NodeId": string;
    /**
     * 该节点内网连接地址所属的网络类型，取值：
     * - **VPC**：专有网络。
     * - **Classic**：经典网络。
     * > 您可以调用[DescribeShardingNetworkAddress](~~62135~~)接口查询该节点的内网连接地址所属的网络类型。
     * @example `VPC`
     */
    "NetworkType"?: string;
    /**
     * 公网地址类型，可选值：
     * - **SRV**
     * - **Normal**
     * >当释放的连接地址是SRV地址时，本参数才可用。
     * @example `SRV`
     */
    "ConnectionType"?: string;
}
