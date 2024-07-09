export interface ModifyBackupPolicyRequest {
    /**
     * 实例ID。
     * @example `dds-bp16cb162771****`
     */
    "DBInstanceId": string;
    /**
     * 执行备份的时间，格式为<i>HH:mm</i>Z-<i>HH:mm</i>Z（UTC时间）。
     * > 时间范围限制为1小时。
     * @example `03:00Z-04:00Z`
     */
    "PreferredBackupTime"?: string;
    /**
     * 备份周期，取值说明：
     * - **Monday**：周一。
     * - **Tuesday**：周二。
     * - **Wednesday**：周三。
     * - **Thursday**：周四。
     * - **Friday**：周五。
     * - **Saturday**：周六。
     * - **Sunday**：周日。
     * > 如需传入多个值，请用英文逗号（,）隔开。
     * @example `Monday,Wednesday,Friday,Sunday`
     */
    "PreferredBackupPeriod"?: string;
    /**
     * 全量备份保留天数。
     * > - 2021年09月10日前用户默认保留天数为7天。
     * > - 2021年09月10日后新用户默认保留天数为30天。
     * @example `30`
     */
    "BackupRetentionPeriod"?: number;
    /**
     * 是否打开日志备份，取值说明：
     * - **0**：关闭（默认值）。
     * - **1**：打开。
     * @example `0`
     */
    "EnableBackupLog"?: number;
    /**
     * 日志备份保留天数，默认为7天。
     * 取值范围：7~730。
     * @example `7`
     */
    "LogBackupRetentionPeriod"?: number;
    /**
     * 快照备份类型，取值说明：
     * - **Flash**：秒级备份。
     * - **Standard**：常规备份（默认值）。
     * @example `Standard`
     */
    "SnapshotBackupType"?: string;
    /**
     * 高频备份频率，取值说明：
     * - **-1**：不开启高频备份。
     * - **30**：每30分钟。
     * - **60**：每1小时。
     * - **120**：每2小时。
     * - **180**：每3小时。
     * - **240**：每4小时。
     * - **360**：每6小时。
     * - **480**：每8小时。
     * - **720**：每12小时。
     * >- 当**SnapshotBackupType**取值为**Standard**时，该参数取值固定为**-1**。
     * >- 当**SnapshotBackupType**取值为**Flash**，且该参数取值大于0时，高频备份才生效。
     * @example `-1`
     */
    "BackupInterval"?: string;
    /**
     * 高频备份保留天数，使用该参数前需要先确认已经传入BackupInterval字段。默认保留时长一天。
     */
    "HighFrequencyBackupRetention"?: number;
    "BackupRetentionPolicyOnClusterDeletion"?: number;
    "CrossBackupType"?: string;
    "SrcRegion"?: string;
    "DestRegion"?: string;
    "CrossRetentionType"?: string;
    "CrossRetentionValue"?: number;
    "CrossBackupPeriod"?: string;
    "EnableCrossLogBackup"?: number;
    "CrossLogRetentionType"?: string;
    "CrossLogRetentionValue"?: number;
    "InstanceType"?: string;
}
