export interface DescribeBackupsResponse {
    /**
     * 请求ID。
     * @example `A6E59F3B-5CB7-4922-85CA-06EC0BB00BAA`
     */
    RequestId: string;
    Backups: {
        /**
         * 备份任务信息列表。
         */
        Backup: {
            /**
             * 备份结束时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC 通用标准时，以Z来标识）。
             * @example `2020-02-26T02:12:50Z`
             */
            EndTime: string;
            /**
             * 备份状态。可取值部分示例：
             * - Succeeded：成功
             * - Failed：失败
             * @example `Succeeded`
             */
            Status: string;
            /**
             * 备份开始时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC 通用标准时，以Z来标识）。
             * @example `2020-02-26T01:57:00Z`
             */
            StartTime: string;
            /**
             * 备份大小。
             * @example `149016650`
             */
            Size: number;
            /**
             * 备份类型。取值：
             * - full：全量备份
             * - Incremental：增量备份
             * @example `Incremental`
             */
            BackupType: string;
            /**
             * 备份ID。
             * @example `20200***`
             */
            BackupId: string;
            /**
             * 备份集群ID。
             * @example `cds-uf6m0bod****6159`
             */
            ClusterId: string;
            /**
             * 备份集群数据中心ID。
             * @example ` cn-shanghai-e`
             */
            DataCenterId: string;
        }[];
    };
}
