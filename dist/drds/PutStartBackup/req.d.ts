export interface PutStartBackupRequest {
    /**
     * DRDS实例ID。
     * @example `drds****c6vxxyzd`
     */
    "DrdsInstanceId": string;
    /**
     * 备份模式，详情请参见[备份模式](~~108631~~)，取值范围如下：
     * *  phy：快速备份
     * * logic：一致性备份
     * @example `phy`
     */
    "BackupMode"?: string;
    /**
     * 备份等级，取值范围如下：
     * * instance：实例级
     * * db：数据库级
     * @example `db`
     */
    "BackupLevel"?: string;
    /**
     * 如果是数据库级备份，需要指定需要备份的数据库列表，多个数据库间用英文逗号（,）分隔。
     * @example `db_1, db_2`
     */
    "BackupDbNames"?: string;
}
