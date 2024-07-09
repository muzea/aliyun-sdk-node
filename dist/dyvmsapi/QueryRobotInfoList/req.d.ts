export interface QueryRobotInfoListRequest {
    /**
     * 审核状态，取值：
     * - **CONFIGURABLE**：可配置。
     * - **AUDITING**：审核中 。
     * - **AUDITPASS**：审核通过。
     * - **AUDITFAIL**：审核失败。
     * @example `AUDITING`
     */
    "AuditStatus"?: string;
}
