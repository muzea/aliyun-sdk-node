export interface DescribeParametersRequest {
    /**
     * 实例ID。
     * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中的Mongos节点ID或Shard节点ID。
     * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
     * @example `d-bpxxxxxxxx`
     */
    "NodeId"?: string;
    /**
     * 实例的角色类型，取值说明：
     * - db：shard角色。
     * - cs：config server角色。
     * - mongos：mongos角色。
     * @example `mongos`
     */
    "CharacterType"?: string;
    /**
     * 扩展参数。
     * @example `terrform`
     */
    "ExtraParam"?: string;
}
