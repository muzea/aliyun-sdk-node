export interface RestartNodeRequest {
    /**
     * 实例ID。
     * > 当配置为分片集群实例ID时，还需要配置**NodeId**参数。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中子实例节点(Shard/Mongos/CS)的ID。
     * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数必须传入。
     * @example `d-bp128a003436****`
     */
    "NodeId"?: string;
    /**
     * 节点的角色ID。
     * 1. 副本集实例可以通过[DescribeReplicaSetRole](~~468469~~)进行查询。
     * 1. 分片集实例可以通过[DescribeRoleZoneInfo](~~468472~~)进行查询。
     * @example `6025****`
     */
    "RoleId": string;
}
