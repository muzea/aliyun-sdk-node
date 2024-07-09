export interface DescribeRestoreOrderRequest {
    /**
     * 实例ID
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 备份时间。
     * @example `2019-09-16 15:12:53`
     */
    "PreferredBackupTime"?: string;
    /**
     * 备份模式，取值为**logic**或**phy**。
     * @example `phy`
     */
    "BackupMode"?: string;
    /**
     * 备份级别，取值范围如下：
     * * **db**：库级别
     * * **instance**：实例级别
     * @example `db`
     */
    "BackupLevel"?: string;
    /**
     * 备份涉及的数据库名称。
     * @example `drds_flashback`
     */
    "BackupDbNames"?: string;
    /**
     * 备份ID。
     * @example `1918df27-4563-11e9-8403-af4fbe******`
     */
    "BackupId"?: string;
}
