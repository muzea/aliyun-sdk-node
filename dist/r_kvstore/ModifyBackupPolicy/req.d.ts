export interface ModifyBackupPolicyRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 备份时间，格式为<i>HH:mm</i>Z-<i>HH:mm</i>Z（UTC时间）。
     * > 必须为整点，且间隔时间为1小时。
     * @example `07:00Z-08:00Z`
     */
    "PreferredBackupTime": string;
    /**
     * 备份周期，取值：
     * * **Monday**：周一。
     * * **Tuesday**：周二。
     * * **Wednesday**：周三。
     * * **Thursday**：周四。
     * * **Friday**：周五。
     * * **Saturday**：周六。
     * * **Sunday**：周日。
     * > 支持多选，请使用英文逗号（,）分隔。
     * @example `Tuesday`
     */
    "PreferredBackupPeriod": string;
    /**
     * 开启或关闭数据闪回功能，取值：
     * * **1**：开启。同时，您还需确保已在实例的参数设置中开启AOF持久化（`appendonly`为`yes`），开启后，才能使用数据闪回功能。
     * * **0**：关闭，默认值。
     * > 仅Tair（Redis企业版）内存型和持久内存型支持该参数，更多信息请参见[数据闪回](~~443784~~)。
     * @example `1`
     */
    "EnableBackupLog"?: number;
    /**
     * 数据备份保留天数。默认7天，取值范围为7~730。
     * @example `7`
     */
    "BackupRetentionPeriod"?: number;
}
