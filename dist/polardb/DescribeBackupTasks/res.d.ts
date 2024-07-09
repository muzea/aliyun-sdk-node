export interface DescribeBackupTasksResponse {
    /**
     * 请求ID。
     * @example `FA8C1EF1-E3D4-44D7-B809-823187******`
     */
    RequestId: string;
    Items: {
        /**
         * 备份任务详情。
         */
        BackupJob: {
            /**
             * 备份任务开始时间（UTC），格式为`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2020-08-08T07:24:01Z`
             */
            StartTime: string;
            /**
             * 备份任务进度百分比。
             * @example `0`
             */
            Process: string;
            /**
             * 备份任务ID。
             * @example `11111111`
             */
            BackupJobId: string;
            /**
             * 备份模式，取值范围如下：
             * * **Automated**：系统自动备份
             * * **Manual**：手动备份
             * @example `Automated`
             */
            JobMode: string;
            /**
             * 备份任务状态，取值范围如下：
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
             * 备份任务类型，取值范围如下：
             * * **TempBackupTask**：临时备份任务
             * * **NormalBackupTask**：普通备份任务
             * @example `NormalBackupTask`
             */
            TaskAction: string;
        }[];
    };
}
