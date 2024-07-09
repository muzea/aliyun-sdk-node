export interface DescribeBackupsResponse {
    /**
     * 总记录数。
     * @example `300`
     */
    TotalCount: string;
    /**
     * 本页备份集个数。
     * @example `30`
     */
    PageSize: string;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    Items: {
        /**
         * 备份集列表。
         */
        Backup: {
            /**
             * AnalyticDB MySQL数仓版（3.0）集群ID。
             * @example `am-bp18934i73vb5****`
             */
            DBClusterId: string;
            /**
             * 备份类型。取值说明：
             * - **FullBackup**：全量备份。
             * - **IncrementalBackup**：增量备份。
             * @example `FullBackup`
             */
            BackupType: string;
            /**
             * 备份开始时间。
             * @example `2022-06-01T16:00Z`
             */
            BackupStartTime: string;
            /**
             * 备份文件大小，单位：Byte。
             * @example `2167808`
             */
            BackupSize: number;
            /**
             * 备份结束时间。
             * @example `2022-06-02T16:00Z`
             */
            BackupEndTime: string;
            /**
             * 备份集ID。
             * @example `32732****`
             */
            BackupId: string;
            /**
             * 备份方法。只支持快照备份（Snapshot）。
             * @example `Snapshot`
             */
            BackupMethod: string;
        }[];
    };
}
