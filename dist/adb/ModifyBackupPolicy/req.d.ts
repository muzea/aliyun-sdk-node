export interface ModifyBackupPolicyRequest {
    /**
     * 集群ID。
     * @example `am-bp1xxxxxxxx47`
     */
    "DBClusterId": string;
    /**
     * 执行全量备份的开始时间，格式为HH:mmZ-HH:mmZ（UTC时间）。
     * > 时间范围限制为1小时。
     * @example `00:00Z-01:00Z`
     */
    "PreferredBackupTime": string;
    /**
     * 全量备份周期，多个取值用英文逗号（,）隔开。取值说明：
     * - **Monday**：周一。
     * - **Tuesday**：周二。
     * - **Wednesday**：周三。
     * - **Thursday**：周四。
     * - **Friday**：周五。
     * - **Saturday**：周六。
     * - **Sunday**：周日。
     * > 为保证数据安全，最少选择两个。
     * @example `Monday,Wednesday,Friday,Sunday`
     */
    "PreferredBackupPeriod": string;
    /**
     * 全量备份保留天数，取值范围为：7~730。
     * > 本参数不填写，默认为7天。
     * @example `30`
     */
    "BackupRetentionPeriod"?: string;
    /**
     * 是否开启日志（实时）备份。取值说明：
     * - **Enable**：开启。
     * - **Disable**：关闭。
     * > 本参数不填写，默认开启。
     * @example `Enable`
     */
    "EnableBackupLog"?: string;
    /**
     * 日志（实时）数据备份保留天数，取值范围为：7~730。
     * > 本参数不填写，默认为7天。
     * @example `30`
     */
    "LogBackupRetentionPeriod"?: number;
}
