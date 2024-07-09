export interface EnableBackupLogRequest {
    /**
     * 备份计划ID。您可以调用[DescribeBackupPlanList](~~437215~~)查询。
     * @example `dbstooi******`
     */
    "BackupPlanId": string;
    /**
     * 任意字符串。
     * @example `dbs`
     */
    "ClientToken"?: string;
}
