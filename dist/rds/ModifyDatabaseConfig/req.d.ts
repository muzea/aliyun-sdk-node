export interface ModifyDatabaseConfigRequest {
    /**
     * 实例ID。
     * @example `rm-t4nnu1my39q******`
     */
    "DBInstanceId": string;
    /**
     * 数据库名。
     * > 不支持填入多个数据库名称。
     * @example `testDB`
     */
    "DBName": string;
    /**
     * 期望修改的数据库属性。
     * - **修改数据库属性功能**：填写目标数据库的属性名称。
     * - **数据归档OSS功能**：填写目标数据库的状态。传入`covert_online_db_to_cold_storage`表示将在线库转为冷存库，传入`convert_cold_storage_db_to_online`表示将冷存库转为在线库。
     * @example `compatibility_level`
     */
    "DatabasePropertyName": string;
    /**
     * 期望修改的数据库属性值。
     * - **修改数据库属性功能**：填写目标数据库的属性值。
     * - **数据归档OSS功能**：填写**1**，将目标库转为冷存或在线状态。
     * @example `150`
     */
    "DatabasePropertyValue": string;
}
