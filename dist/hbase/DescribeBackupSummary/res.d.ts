export interface DescribeBackupSummaryResponse {
    /**
     * 请求ID。
     * @example `168793CB-7B31-43E7-ADAB-FE3E8D584D6E`
     */
    RequestId: string;
    /**
     * 增量备份详情。
     */
    Incr: {
        /**
         * 增量备份状态。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 当前增量备份写入速度。
         * @example `0.00 MB/s`
         */
        Speed: string;
        /**
         * 同步点位。
         * @example `2020-11-05T01:20:31Z`
         */
        Pos: string;
        /**
         * 排队中LOG数量。
         * @example `0`
         */
        QueueLogNum: string;
        /**
         * 数据量。
         * @example `266 B`
         */
        BackupLogSize: string;
        /**
         * 备份中LOG数量。
         * @example `2`
         */
        RunningLogNum: string;
    };
    /**
     * 全量备份详情。
     */
    Full: {
        /**
         * 是否有下一页，返回值：
         * - true：有下一页。
         * - false：无下一页。
         * @example `false`
         */
        HasMore: string;
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
         * 列表总数。
         * @example `2`
         */
        Total: number;
        /**
         * 下次全量备份时间。
         * @example `2020-11-09T18:00:00Z`
         */
        NextFullBackupDate: string;
        Records: {
            /**
             * 历史全量备份列表。
             */
            Record: {
                /**
                 * 备份状态。
                 * @example `SUCCESS`
                 */
                Status: string;
                /**
                 * 全量备份完成时间。
                 * @example `2020-11-02T18:02:04Z`
                 */
                FinishTime: string;
                /**
                 * 完成进度。
                 * @example `1/1`
                 */
                Process: string;
                /**
                 * 备份数据⼤⼩。
                 * @example `1.2 kB`
                 */
                DataSize: string;
                /**
                 * 备份速度。
                 * @example `0.00 MB/s`
                 */
                Speed: string;
                /**
                 * 备份记录ID。
                 * @example `20201103020000`
                 */
                RecordId: string;
                /**
                 * 全量备份开始时间。
                 * @example `2020-11-02T18:00:00Z`
                 */
                CreateTime: string;
            }[];
        };
    };
}
