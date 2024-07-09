export interface DescribeBackupSetDownloadLinkResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 目标备份集所对应的下载任务 ID。
         * @example `1000002`
         */
        DownloadTaskId: number;
        /**
         * 目标备份集所对应的下载任务状态。
         * @example `RUNNING`
         */
        DownloadTaskStatus: string;
        /**
         * 目标备份集所对应的下载任务创建时间。
         * @example `2020-05-22T17:04:18`
         */
        DownloadTaskCreateTime: string;
        /**
         * 备份集的可恢复时间点。
         * @example `yyyy-MM-dd HH:mm:ss`
         */
        BackupRestorableTime: string;
        /**
         * 目标备份集 ID。
         * @example `bak-4n****gacpa8`
         */
        BackupSetId: string;
        /**
         * 内部网址。
         * @example `http://bucket.oss-region-internal.aliyuncs.com/xxxxx`
         */
        InternalUrl: string;
        /**
         * 网址过期时间。
         * @example `2024-01-04 17:39:49`
         */
        UrlExpiredTime: string;
        /**
         * 网址有效时长。单位：秒。
         * @example `3600`
         */
        UrlAliveTime: number;
    };
}
