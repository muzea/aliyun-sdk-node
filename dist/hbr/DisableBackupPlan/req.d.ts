export interface DisableBackupPlanRequest {
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
     * - **ECS_FILE**：表示备份ECS文件
     * - **OSS**：表示备份阿里云OSS
     * - **NAS**：表示备份阿里云NAS
     * @example `ECS_FILE`
     */
    "SourceType"?: string;
}
