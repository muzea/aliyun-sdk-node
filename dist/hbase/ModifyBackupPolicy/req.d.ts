export interface ModifyBackupPolicyRequest {
    /**
     * 集群ID。
     * @example `hb-t4naqsay5gn****`
     */
    "ClusterId": string;
    /**
     * 当前时区的备份时间区间。间隔为1小时。
     * @example `01:00-02:00`
     */
    "PreferredBackupTime": string;
    /**
     * 备份周期。
     * - Monday：每周一进行备份
     * - Tuesday：每周二进行备份。
     * - Wednesday：每周三进行备份。
     * - Thursday： 每周四进行备份。
     * - Friday：每周五进行备份。
     * - Saturday： 每周六进行备份。
     * - Sunday：每周日进行备份。
     * @example `Thursday`
     */
    "PreferredBackupPeriod": string;
    /**
     * 备份开始的utc时间。
     * @example `17:00Z`
     */
    "PreferredBackupStartTimeUTC"?: string;
    /**
     * 备份结束的utc时间。
     * @example `18:00Z`
     */
    "PreferredBackupEndTimeUTC"?: string;
}
