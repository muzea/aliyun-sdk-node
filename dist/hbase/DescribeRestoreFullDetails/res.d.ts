export interface DescribeRestoreFullDetailsResponse {
    /**
     * 请求Id。
     * @example `CFE525CF-C691-4140-A981-D004DAA7A840`
     */
    RequestId: string;
    /**
     * 全量恢复详情。
     */
    RestoreFull: {
        /**
         * 成功的个数。
         * @example `1`
         */
        Succeed: number;
        /**
         * 总数据量大小。
         * @example `1.2 kB`
         */
        DataSize: string;
        /**
         * 总恢复速度。
         * @example `0.00 MB/s`
         */
        Speed: string;
        /**
         * 页码大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 失败的个数。
         * @example `0`
         */
        Fail: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 总记录数。
         * @example `1`
         */
        Total: number;
        RestoreFullDetails: {
            /**
             * 恢复表详情。
             */
            RestoreFullDetail: {
                /**
                 * 完成时间。
                 * @example `2020-11-05T06:45:51Z`
                 */
                EndTime: string;
                /**
                 * 恢复启动时间。
                 * @example `2020-11-05T06:45:45Z`
                 */
                StartTime: string;
                /**
                 * 恢复进度。
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
                 * 恢复状态。
                 * @example `SUCCEEDED`
                 */
                State: string;
                /**
                 * 报错信息（执行失败时有）。
                 * @example `null`
                 */
                Message: string;
                /**
                 * 恢复表名。
                 * @example `default:test1`
                 */
                Table: string;
            }[];
        };
    };
}
