export interface ModifyBackupPolicyRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp***************`
     */
    "DBInstanceId": string;
    /**
     * 数据备份时间。默认值为00:00Z-01:00Z，格式：HH:mmZ-HH:mmZ（UTC时间）。
     * @example `15:00Z-16:00Z`
     */
    "PreferredBackupTime": string;
    /**
     * 数据备份周期，多个取值用英文逗号（,）隔开。取值说明：
     * - Monday：周一。
     * - Tuesday：周二。
     * - Wednesday：周三。
     * - Thursday：周四。
     * - Friday：周五。
     * - Saturday：周六。
     * - Sunday：周日。
     * @example `Tuesday，Thursday，Saturday`
     */
    "PreferredBackupPeriod": string;
    /**
     * 数据备份保留天数。默认7天，最大值定为7天，取值范围1~7。
     * @example `7`
     */
    "BackupRetentionPeriod"?: number;
    /**
     * 是否开启自动打恢复点。取值说明：
     * - true（默认）：开启。
     * - false：关闭。
     * @example `true`
     */
    "EnableRecoveryPoint"?: boolean;
    /**
     * 恢复点频次。取值说明：
     * - **1**（默认）：每小时。
     * - **2**：每两小时。
     * - **4**：每四小时。
     * - **8**：每八小时。
     * @example `8`
     */
    "RecoveryPointPeriod"?: string;
}
