export interface DescribeBackupPolicyResponse {
    /**
     * 备份周期，取值说明：
     * - **Monday**：星期一。
     * - **Tuesday**：星期二。
     * - **Wednesday**：星期三。
     * - **Thursday**：星期四。
     * - **Friday**：星期五。
     * - **Saturday**：星期六。
     * - **Sunday**：星期日。
     * @example `Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday`
     */
    PreferredBackupPeriod: string;
    /**
     * 请求ID。
     * @example `5A9464CA-F7DC-5434-90B1-DF7F197C****`
     */
    RequestId: string;
    /**
     * 备份时间，格式为<i>HH:mm</i>Z-<i>HH:mm</i>Z（UTC时间）。
     * @example `09:00Z-10:00Z`
     */
    PreferredBackupTime: string;
    /**
     * 备份保留天数。
     * @example `30`
     */
    BackupRetentionPeriod: string;
    /**
     * 下次常规备份时间，格式为<i>yyyy-mm-dd</i>t<i>hh:mm</i>z（utc时间）。
     * @example `2024-06-19T19:11Z`
     */
    PreferredNextBackupTime: string;
    /**
     * 是否打开日志备份，取值说明：
     * - **0**：关闭（默认值）。
     * - **1**：打开。
     * @example `1`
     */
    EnableBackupLog: number;
    /**
     * 日志备份保留天数，取值范围：7~730。
     * @example `7`
     */
    LogBackupRetentionPeriod: number;
    /**
     * 快照备份类型，取值说明：
     * - **Flash**：秒级备份。
     * - **Standard**：常规备份（默认值）。
     * @example `Standard`
     */
    SnapshotBackupType: string;
    /**
     * 高频备份频率，取值说明：
     * - **-1**：不开启高频备份。
     * - **15**：每15分钟。
     * - **30**：每30分钟。
     * - **60**：每1小时。
     * - **120**：每2小时。
     * - **180**：每3小时。
     * - **240**：每4小时。
     * - **360**：每6小时。
     * - **480**：每8小时。
     * - **720**：每12小时。
     * @example `-1`
     */
    BackupInterval: number;
    /**
     * 高频备份保留天数，单位为天。
     * @example `1`
     */
    HighFrequencyBackupRetention: string;
    BackupRetentionPolicyOnClusterDeletion: number;
    SrcRegion: string;
    DestRegion: string;
    CrossRetentionType: string;
    CrossRetentionValue: number;
    CrossBackupPeriod: string;
    EnableCrossLogBackup: number;
    CrossLogRetentionType: string;
    CrossLogRetentionValue: number;
}
