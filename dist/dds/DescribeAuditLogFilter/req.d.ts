interface DescribeAuditLogFilterRequest {
    "RegionId"?: string;
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
export { DescribeAuditLogFilterRequest };