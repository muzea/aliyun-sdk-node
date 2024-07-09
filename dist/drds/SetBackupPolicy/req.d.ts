export interface SetBackupPolicyRequest {
    /**
     * 实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 备份周期，取值范围如下：
     * * 0：周一
     * * 1：周二
     * * 2：周三
     * * 3：周四
     * * 4：周五
     * * 5：周六
     * * 6：周日
     * @example `0`
     */
    "PreferredBackupPeriod"?: string;
    /**
     * 开始备份时间。
     * @example `11:30:30`
     */
    "PreferredBackupStartTime"?: string;
    /**
     * 结束备份时间。
     * @example `12:30:30`
     */
    "PreferredBackupEndTime"?: string;
    /**
     * 备份模式，取值范围如下：
     * * **logic**：逻辑备份
     * * **phy**：物理备份
     * @example `phy`
     */
    "BackupMode"?: string;
    /**
     * 备份级别，取值范围如下：
     * * db：数据库级
     * * instance：实例级
     * @example `db`
     */
    "BackupLevel"?: string;
    /**
     * 备份涉及到的数据库，多个数据库间用英文逗号（,）隔开。
     * > 仅当备份级别为数据库级时该参数才生效。
     * @example `test1,test2`
     */
    "BackupDbNames"?: string;
    /**
     * 备份日志是否开启，取值范围如下：
     * * 1：开启
     * * 0：关闭
     * @example `1`
     */
    "BackupLog"?: string;
    /**
     * 数据备份保留天数，取值范围为7~730天。
     * @example `7`
     */
    "DataBackupRetentionPeriod"?: string;
    /**
     * 日志保留天数，取值范围为7~730天，且必须小于或等于数据备份天数。
     * @example `7`
     */
    "LogBackupRetentionPeriod"?: string;
}
