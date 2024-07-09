export interface DescribeBackupTasksRequest {
    /**
     * 集群ID。
     * @example `pc-***************`
     */
    "DBClusterId": string;
    /**
     * 备份任务ID。
     * @example `11111111`
     */
    "BackupJobId"?: string;
    /**
     * 备份模式，取值范围如下：
     * * **Automated**：系统自动备份
     * * **Manual**：手动备份
     * @example `Manual`
     */
    "BackupMode"?: string;
}
