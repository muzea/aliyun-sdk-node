export interface DescribeAuditLogFilterRequest {
    /**
     * 实例ID。
     * @example `dds-bp12c5b040dc****`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中节点的角色，取值：
     * - **mongos**：mongos节点配置。
     * - **db**：shard节点配置。
     * - **logic**：逻辑实例配置。
     * @example `logic`
     */
    "RoleType"?: string;
}
