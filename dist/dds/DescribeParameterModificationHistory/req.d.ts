export interface DescribeParameterModificationHistoryRequest {
    /**
     * 实例ID。
     * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
     * @example `dds-bp2235****`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中Mongos节点ID或Shard节点ID。
     * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
     * @example `d-bp1158****`
     */
    "NodeId"?: string;
    /**
     * 查询开始时间。格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2019-01-01T12:10Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间。必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2019-01-02T12:10Z`
     */
    "EndTime": string;
    /**
     * 实例的角色类型。取值：
     * - **db**: shard角色
     * - **cs**：config server角色
     * - **mongos**：mongos角色
     * - **logic**：分片集群实例
     * @example `mongos`
     */
    "CharacterType"?: string;
}
