export interface DeleteBackupPlanRequest {
    /**
     * 备份计划ID。
     * @example `plan-*********************`
     */
    "PlanId": string;
    /**
     * 备份库仓库ID，当SourceType不为UDM_ECS时，备份仓库ID必填。
     * @example `v-*********************`
     */
    "VaultId"?: string;
    /**
     * 数据源类型，取值范围：
     * - **ECS_FILE**：表示备份ECS文件
     * - **OSS**：表示备份阿里云OSS
     * - **NAS**：表示备份阿里云NAS
     * - **UDM_ECS**：表示备份ECS整机
     * - **OTS**：表示备份阿里云Tablestore
     * @example `ECS_FILE`
     */
    "SourceType"?: string;
    /**
     * 是否要求无正在运行的作业
     * @example `false`
     */
    "RequireNoRunningJobs"?: boolean;
}
