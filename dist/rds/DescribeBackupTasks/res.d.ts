export interface DescribeBackupTasksResponse {
    /**
     * 请求ID。
     * @example `90496720-2319-42A8-87CD-FCE4DF95EBED`
     */
    RequestId: string;
    Items: {
        /**
         * 备份任务列表。
         */
        BackupJob: {
            /**
             * 任务进度百分比。
             * @example `25`
             */
            Process: string;
            /**
             * 备份任务ID。
             * @example `476****`
             */
            BackupJobId: string;
            /**
             * 备份任务状态。取值：
             * * **NoStart**：未开始
             * * **Checking**：检查备份
             * * **Preparing**：准备备份
             * * **Waiting**：等待备份
             * * **Uploading**：上传备份
             * * **Finished**：完成备份
             * * **Failed**：备份失败
             * >有任务执行时才会返回本参数。
             * @example `NoStart`
             */
            BackupStatus: string;
            /**
             * 备份模式，取值：
             * * **Automated**：系统自动备份
             * * **Manual**：手动备份
             * @example `Automated`
             */
            JobMode: string;
            /**
             * 备份程序状态。取值：
             * * **NoStart**：未开始
             * * **Preparing**：准备中
             * * **Waiting**：等待中
             * * **Uploading**：上传中
             * * **Checking**：检查中
             * * **Finished**：已完成
             * @example `NoStart`
             */
            BackupProgressStatus: string;
            /**
             * 任务生成的备份集ID。
             * >当返回参数**BackupStatus**为**Finished**后，传入请求参数**BackupJobId**才能够查看到备份集ID。
             * @example `34665****`
             */
            BackupId: string;
            /**
             * 任务类型，取值：
             * * **TempBackupTask**：临时备份任务
             * * **NormalBackupTask**：普通备份任务
             * @example `NormalBackupTask`
             */
            TaskAction: string;
        }[];
    };
}
