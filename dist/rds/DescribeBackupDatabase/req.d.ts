export interface DescribeBackupDatabaseRequest {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5xxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 备份集ID。
     * @example `90262212`
     */
    "BackupId"?: string;
}
