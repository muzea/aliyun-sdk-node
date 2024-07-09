export interface RemoveBackupsSetRequest {
    /**
     * DRDS实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 备份集ID，您可以调用[DescribeBackupSets](~~139331~~)接口查询备份集ID。
     * @example `ba30d5c4-a6dc-11ea-bd40-************`
     */
    "BackupId": string;
}
