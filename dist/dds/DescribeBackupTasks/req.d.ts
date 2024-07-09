export interface DescribeBackupTasksRequest {
    /**
     * 实例ID。
     * @example `dds-2zeb2d64cb46xxxx`
     */
    "DBInstanceId": string;
    /**
     * 备份任务ID。
     * > 如果您调用[CreateBackup](~~61075~~)执行了手动备份，您可以将返回的备份ID传入，用以查询备份的进度。
     * @example `170034`
     */
    "BackupJobId"?: string;
}
