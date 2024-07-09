export interface DescribeBackupTasksRequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)接口获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 备份任务ID。
     * > 如果您调用[CreateBackup](~~61075~~)执行了手动备份，您可以将返回的备份ID传入，用以查询备份的进度。
     * @example `1162****`
     */
    "BackupJobId"?: string;
    /**
     * 备份模式，取值：
     * * **Automated**：系统自动备份，您可以调用[DescribeBackupPolicy](~~61078~~)查询自动备份策略。
     * * **Manual**：手动备份
     * > 默认返回所有备份模式的任务信息。
     * @example `Manual`
     */
    "JobMode"?: string;
}
