export interface DescribeHanaBackupSettingResponse {
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9D0DB5BC-5071-5ADF-BCD1-14EBB0C17C54`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 备份设置。
     */
    HanaBackupSetting: {
        /**
         * 数据库名称。
         * @example `SYSTEMDB`
         */
        DatabaseName: string;
        /**
         * 是否日志备份到Backint。
         * - true：日志备份到Backint。
         * - false：不备份到Backint。
         * @example `true`
         */
        LogBackupUsingBackint: boolean;
        /**
         * Catalog备份配置文件。
         * @example `/usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param`
         */
        CatalogBackupParameterFile: string;
        /**
         * Catalog备份使用Backint。
         * - true：使用Backint。
         * - false：不使用Backint。
         * @example `false`
         */
        CatalogBackupUsingBackint: boolean;
        /**
         * 数据备份配置文件。
         * @example `/usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param`
         */
        DataBackupParameterFile: string;
        /**
         * 日志备份时间间隔，单位秒。
         * @example `900`
         */
        LogBackupTimeout: number;
        /**
         * 是否开启自动日志备份。
         * - **true**：开启自动日志备份。
         * - **false**：不开启自动日志备份。
         * @example `true`
         */
        EnableAutoLogBackup: boolean;
        /**
         * 日志备份配置文件。
         * @example `/usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param`
         */
        LogBackupParameterFile: string;
    };
}
