interface ModifyAuditLogFilterRequest {
    "RegionId"?: string;
    /**
    * 设置审计日志的采集类型。
    * - **admin**：运维管控操作。
    * - **slow**：慢日志。
    * - **query**：查询操作。
    * - **insert**：插入操作。
    * - **update**：更新操作。
    * - **delete**：删除操作。
    * - **command**：协议命令。例如aggregate聚合方法。
    * @example `insert,query,update,delete`
    */ "Filter": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 实例中节点的角色，取值：
    * - **primary**：主节点。
    * - **secondary**：从节点。
    * @example `primary`
    */ "RoleType"?: string;
}
export { ModifyAuditLogFilterRequest };