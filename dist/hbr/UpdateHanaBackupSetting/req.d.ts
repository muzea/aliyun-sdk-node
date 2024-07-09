export interface UpdateHanaBackupSettingRequest {
    /**
     * 备份仓库ID。
     * @example `v-0005n******rluw5`
     */
    "VaultId"?: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-000ezvg******8znz`
     */
    "ClusterId": string;
    /**
     * 数据库名称。
     * @example `SYSTEMDB`
     */
    "DatabaseName": string;
    /**
     * 是否开启自动日志备份。
     * - **true**：开启自动日志备份。
     * - **false**：不开启自动日志备份。
     * @example `true`
     */
    "EnableAutoLogBackup": boolean;
    /**
     * 数据备份配置文件。
     * @example `/usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param`
     */
    "DataBackupParameterFile"?: string;
    /**
     * 日志备份配置文件。
     * @example `/usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param`
     */
    "LogBackupParameterFile"?: string;
    /**
     * 是否日志备份到Backint。
     * - true：将日志备份到Backint。
     * - false：不备份到Backint。
     * @example `true`
     */
    "LogBackupUsingBackint": boolean;
    /**
     * 日志备份间隔时间，单位秒。
     * @example `900`
     */
    "LogBackupTimeout"?: number;
    /**
     * Catalog备份是否使用Backint。
     * - true：Catalog备份使用Backint。
     * - false：Catalog备份不使用Backint。
     * @example `true`
     */
    "CatalogBackupUsingBackint": boolean;
    /**
     * Catalog备份配置文件。
     * @example `/usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param`
     */
    "CatalogBackupParameterFile"?: string;
}
