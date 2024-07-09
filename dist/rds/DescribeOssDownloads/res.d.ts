export interface DescribeOssDownloadsResponse {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `A5409D02-D661-4BF3-8F3D-0A814D0574E7`
     */
    RequestId: string;
    /**
     * 迁移任务的ID。
     * @example `562154852`
     */
    MigrateTaskId: string;
    Items: {
        /**
         * 导入的文件列表。
         */
        OssDownload: {
            /**
             * 结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-08-27T12:45:15Z`
             */
            EndTime: string;
            /**
             * 文件状态，取值：
             * * **NoStart**：未开始
             * * **Downloading**：下载中
             * * **Finished**：下载完成
             * * **DownloadFailed**：下载失败
             * * **VerifyFailed**：MD5校验失败
             * * **Deleted**：已删除
             * * **DeleteFailed**：删除失败
             * * **CheckSuccess**：检查成功
             * * **CheckFailed**：检查失败
             * * **Restoring**：还原中
             * * **Restored**：还原成功
             * * **RestoreFailed**：还原失败
             * @example `Finished`
             */
            Status: string;
            /**
             * 文件描述信息。
             * @example `App description`
             */
            Description: string;
            /**
             * 备份文件在下载列表中的创建时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-08-17T12:45:15Z`
             */
            CreateTime: string;
            /**
             * 备份类型，取值：
             * * **Database**：全量备份文件
             * * **Differential_Database**：增量备份文件
             * * **Transaction_Log**：日志备份文件
             * @example `Database`
             */
            BackupMode: string;
            /**
             * 是否可用，取值：**True | False**
             * @example `True`
             */
            IsAvailable: string;
            /**
             * 备份文件在OSS上的名称。
             * @example `test`
             */
            FileName: string;
            /**
             * 备份文件大小，单位MB。
             * @example `2`
             */
            FileSize: string;
        }[];
    };
}
