export interface DescribeBackupPolicyResponse {
    /**
     * 数据备份周期，多个取值用英文逗号（,）隔开。取值：
     * - Monday：周一；
     * - Tuesday：周二；
     * - Wednesday：周三；
     * - Thursday：周四；
     * - Friday：周五；
     * - Saturday：周六；
     * - Sunday：周日。
     * @example `Tuesday,Friday`
     */
    PreferredBackupPeriod: string;
    /**
     * 日志备份保留天数。
     * @example `7`
     */
    LogBackupRetentionPeriod: number;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 数据备份时间，格式：HH:mmZ-HH:mmZ。
     * @example `15:00Z-16:00Z`
     */
    PreferredBackupTime: string;
    /**
     * 是否开启。
     * - true：开启。
     * - false：关闭。
     * @example `true`
     */
    EnableBackupLog: string;
    /**
     * 数据备份保留天数。
     * @example `7`
     */
    BackupRetentionPeriod: number;
}
