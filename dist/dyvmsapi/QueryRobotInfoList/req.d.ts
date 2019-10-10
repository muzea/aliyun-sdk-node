interface QueryRobotInfoListRequest {
    "RegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 审核状态，包括：
    * - **CONFIGURABLE**：可配置。
    * - **AUDITING**：审核中 。
    * - **AUDITPASS**：审核通过。
    * - **AUDITFAIL**：审核失败。
    * @example `AUDITING`
    */ "AuditStatus"?: string;
}
export { QueryRobotInfoListRequest };