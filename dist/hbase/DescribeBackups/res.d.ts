export interface DescribeBackupsResponse {
    /**
     * 备份开启状态。
     * - enable：已开启。
     * - disable： 未开启。
     * - opening：开启中。
     * @example `enable`
     */
    EnableStatus: string;
    /**
     * 页面大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `A93CE373-0FDE-4CCB-9DBA-6700906825ED`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    Backups: {
        /**
         * 备份记录集合。
         */
        Backup: {
            /**
             * 备份状态。
             * - **0**：备份已完成。
             * - **1**：备份中。
             * @example `0`
             */
            BackupStatus: string;
            /**
             * 备份开始时间。
             * @example `2020-12-23 17:25:08`
             */
            BackupStartTime: string;
            /**
             * 备份类型。F为全量备份。
             * @example `F`
             */
            BackupType: string;
            /**
             * 备份下载链接。
             * @example ` 1`
             */
            BackupDownloadURL: string;
            /**
             * 备份开始的UTC时间。
             * @example `2020-12-23T09:25:08Z`
             */
            BackupStartTimeUTC: string;
            /**
             * 备份完成时间。
             * @example `2020-12-23 17:25:24`
             */
            BackupEndTime: string;
            /**
             * 备份数据库名称。
             * @example ` 1`
             */
            BackupDBNames: string;
            /**
             * 备份ID。
             * @example `511876087`
             */
            BackupId: number;
            /**
             * 备份完成的UTC时间。
             * @example `2020-12-23T09:25:24Z`
             */
            BackupEndTimeUTC: string;
            /**
             * 备份数据大小。单位GB。
             * @example `0.00`
             */
            BackupSize: string;
            /**
             * 备份策略。0为系统备份。
             * @example `0`
             */
            BackupMode: string;
            /**
             * 备份方法。P为物理备份。
             * @example `P`
             */
            BackupMethod: string;
        }[];
    };
}
