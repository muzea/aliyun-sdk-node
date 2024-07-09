export interface DescribeBackupTasksResponse {
    /**
     * 请求ID。
     * @example `D648B367-15B6-1B42-BD4B-47507C9CC****`
     */
    RequestId: string;
    /**
     * 备份任务详情。
     */
    BackupJobs: {
        /**
         * 备份任务ID。
         * @example `170034
        `
         */
        BackupjobId: string;
        /**
         * 备份任务状态。
         * * **Scheduled**：计划中备份任务，包括未开始的常规备份任务。
         * * **Checking**：备份前实例检查。
         * * **Backuping**：备份中。
         * * **Finished**：备份完成。
         * @example `Scheduled`
         */
        BackupSetStatus: string;
        /**
         * 备份开始时间。
         * @example `2024-01-16T11:04:56Z`
         */
        BackupStartTime: string;
        /**
         * 备份进度，单位为%。
         * 仅正在运行的备份才会显示进度。
         * @example `18%`
         */
        Progress: string;
        /**
         * 备份模式，返回值：
         * * **Automated**：系统自动备份。
         * * **Manual**：手动备份。
         * @example `Manual`
         */
        JobMode: string;
    }[];
}
