export interface DescribeAuditLogFilterResponse {
    /**
     * 请求ID。
     * @example `7BAFB0B3-2A54-5B65-B13E-3937CF08FEE6`
     */
    RequestId: string;
    /**
     * 数据库操作日志类型，有以下几种类型：
     * - **admin**：运维管控操作。
     * - **slow**：慢日志。
     * - **query**：查询操作。
     * - **insert**：插入操作。
     * - **update**：更新操作。
     * - **delete**：删除操作。
     * - **command**：协议命令。例如aggregate聚合方法。
     * @example `admin,slow,insert,query,update,delete,command`
     */
    Filter: string;
    /**
     * 分片集群实例中节点的角色。
     * @example `logic`
     */
    RoleType: string;
}
