export interface ExecuteBackupPlanRequest {
    /**
     * 备份计划ID。
     * @example `plan-*********************`
     */
    "PlanId": string;
    /**
     * 备份仓库ID。
     * @example `v-*********************`
     */
    "VaultId"?: string;
    /**
     * 数据源类型，取值范围：
     * - **ECS_FILE**：备份ECS文件。
     * - **OSS**：备份阿里云OSS。
     * - **NAS**：备份阿里云NAS。
     * @example `ECS_FILE`
     */
    "SourceType"?: string;
    /**
     * 备份规则ID。
     * @example `rule-0002*****ux8`
     */
    "RuleId"?: string;
}
