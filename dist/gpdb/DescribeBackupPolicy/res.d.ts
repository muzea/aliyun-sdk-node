export interface DescribeBackupPolicyResponse {
    /**
     * 数据备份保留天数。
     * @example `7`
     */
    BackupRetentionPeriod: number;
    /**
     * 请求ID。
     * @example `9E6B3287-A3E2-5A87-B8D8-E9**********`
     */
    RequestId: string;
    /**
     * 数据备份周期，多个取值用英文逗号（,）隔开。取值说明：
     * - **Monday**：周一。
     * - **Tuesday**：周二。
     * - **Wednesday**：周三。
     * - **Thursday**：周四。
     * - **Friday**：周五。
     * - **Saturday**：周六。
     * - **Sunday**：周日。
     * @example `Wednesday,Friday`
     */
    PreferredBackupPeriod: string;
    /**
     * 数据备份时间。格式：HH:mmZ-HH:mmZ（UTC时间）。
     * @example `12:00Z-13:00Z`
     */
    PreferredBackupTime: string;
    /**
     * 恢复点频次。取值说明：
     * - **1**：每小时。
     * - **2**：每两小时。
     * - **4**：每四小时。
     * - **8**：每八小时。
     * @example `1`
     */
    RecoveryPointPeriod: string;
    /**
     * 是否开启自动恢复点。取值说明：
     * - **true**：开启。
     * - **false**：关闭。
     * @example `true`
     */
    EnableRecoveryPoint: boolean;
}
