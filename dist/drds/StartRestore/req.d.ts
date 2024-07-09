export interface StartRestoreRequest {
    /**
     * DRDS实例ID。
     * @example `rds********`
     */
    "DrdsInstanceId": string;
    /**
     * 实例的恢复时间，格式为`yyyy-MM-dd HH:mm:ss`。
     * @example `2019-09-10 20:18:18`
     */
    "PreferredBackupTime"?: string;
    /**
     * 备份方式，取值范围如下：
     * * logic：逻辑备份
     * * phy：快速备份
     * @example `phy`
     */
    "BackupMode"?: string;
    /**
     * 备份级别，取值范围如下：
     * * db：数据库级别
     * * instance：实例级别
     * @example `db`
     */
    "BackupLevel"?: string;
    /**
     * 需要恢复的数据库名列表，多个数据库之间用英文逗号（,）分隔。
     * > 如不填任何数据库名称则默认恢复实例下所有数据库。
     * @example `test1,test2`
     */
    "BackupDbNames"?: string;
    /**
     * DRDS备份集ID。
     * > 若不填该参数，则默认按时间点（PreferredBackupTime）恢复。
     * @example `23***`
     */
    "BackupId"?: string;
}
