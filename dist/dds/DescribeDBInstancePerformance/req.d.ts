export interface DescribeDBInstancePerformanceRequest {
    /**
     * 实例ID。
     * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
     * @example `dds-bp2635****`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中Mongos节点ID或Shard节点ID，可用于查询单个节点的性能情况。
     * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
     * @example `d-bp2287****`
     */
    "NodeId"?: string;
    /**
     * 性能指标，取值详情请参见[性能参数表](~~64048~~)。
     * >如需传入多个指标请用英文逗号（,）分隔。
     * @example `CpuUsage`
     */
    "Key": string;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-06-13T10:58Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-06-13T11:58Z`
     */
    "EndTime": string;
    /**
     * 单节点实例或副本集实例的节点角色ID。您可以通过调用[DescribeReplicaSetRole](~~62134~~)接口查询。
     * > 当**DBInstanceId**参数传入的是单节点实例ID或副本集实例ID时，本参数才可用。
     * @example `6025****`
     */
    "RoleId"?: string;
    /**
     * 性能数据粒度(5,30,60,600,1800,3600,86400)
     * @example `60`
     */
    "Interval"?: string;
    /**
     * 单节点实例或副本集实例的节点角色，取值说明：
     * - **Primary**：主节点。
     * - **Secondary**：从节点。
     * > - 当**DBInstanceId**参数传入的是单节点实例ID或副本集实例ID时，本参数才可用。
     * > - 当**DBInstanceId**参数传入的是单节点实例时，本参数的取值仅支持**Primary**。
     * @example `Primary`
     */
    "ReplicaSetRole"?: string;
}
