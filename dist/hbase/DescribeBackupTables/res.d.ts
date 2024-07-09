export interface DescribeBackupTablesResponse {
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求Id。
     * @example `01262E9C-B0CC-4663-82FA-D50173649F92`
     */
    RequestId: string;
    /**
     * 页码大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数。
     * @example `1`
     */
    Total: number;
    Tables: {
        Table: string[];
    };
    BackupRecords: {
        /**
         * 备份表详情列表。
         */
        BackupRecord: {
            /**
             * 备份完成时间。
             * @example `2020-11-02T18:00:05Z`
             */
            EndTime: string;
            /**
             * 备份开始时间。
             * @example `2020-11-02T18:00:00Z`
             */
            StartTime: string;
            /**
             * 完成进度。
             * @example `14/14`
             */
            Process: string;
            /**
             * 数据量大小。
             * @example `1.2 kB`
             */
            DataSize: string;
            /**
             * 恢复速度。
             * @example `0.00 MB/s`
             */
            Speed: string;
            /**
             * 表恢复状态。
             * @example `SUCCEEDED`
             */
            State: string;
            /**
             * 报错时的报错信息。
             * @example `null`
             */
            Message: string;
            /**
             * 表名。
             * @example `default:test1`
             */
            Table: string;
        }[];
    };
}
