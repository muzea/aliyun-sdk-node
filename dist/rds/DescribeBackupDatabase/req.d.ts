interface DescribeBackupDatabaseRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 备份集ID。
    * @example `90262212`
    */ "BackupId"?: string;
}
export { DescribeBackupDatabaseRequest };