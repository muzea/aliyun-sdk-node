export interface DescribeBackupPolicyResponse {
    /**
     * 备份结束的Utc时间。
     * @example `18:00Z`
     */
    PreferredBackupEndTimeUTC: string;
    /**
     * 备份保留天数。
     * @example `10`
     */
    BackupRetentionPeriod: string;
    /**
     * 请求Id。
     * @example `94AC38B6-7C6D-45B2-BC03-B8750071A482`
     */
    RequestId: string;
    /**
     * 备份周期。Friday就是每周五进行备份。
     * @example `Friday`
     */
    PreferredBackupPeriod: string;
    /**
     * 当前时区的备份时间区间。
     * @example `01:00-02:00`
     */
    PreferredBackupTime: string;
    /**
     * 备份开始的Utc时间。
     * @example `17:00Z`
     */
    PreferredBackupStartTimeUTC: string;
}
