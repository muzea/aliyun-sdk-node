export interface DescribeRestoreTablesResponse {
    /**
     * 请求ID。
     * @example `18D9CC47-D913-48BF-AB6B-4FA9B28FBDB1`
     */
    RequestId: string;
    Tables: {
        /**
         * 表名的集合。
         */
        Table: string[];
    };
    /**
     * 恢复总览情况。
     */
    RestoreSummary: {
        /**
         * 完成时间。
         * @example `2020-11-05T06:45:51Z`
         */
        EndTime: string;
        /**
         * 恢复开始时间。
         * @example `2020-11-05T06:45:14Z`
         */
        StartTime: string;
        /**
         * 状态。
         * @example `SUCCEEDED`
         */
        State: string;
        /**
         * 记录Id。
         * @example `20201105144514`
         */
        RecordId: string;
        /**
         * 恢复到指定的时间点。
         * @example `2020-11-04T05:15:00Z`
         */
        RestoreToDate: string;
        /**
         * 恢复目标集群。
         * @example `ld-m5e2t34kr54wgxxxx`
         */
        TargetCluster: string;
    };
    /**
     * schema恢复详情。
     */
    RestoreSchema: {
        /**
         * 成功的个数。
         * @example `1`
         */
        Succeed: number;
        /**
         * 页码大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 失败个数。
         * @example `0`
         */
        Fail: number;
        /**
         * 总记录数。
         * @example `1`
         */
        Total: number;
        RestoreSchemaDetails: {
            /**
             * 表的schema恢复详情进度。
             */
            RestoreSchemaDetail: {
                /**
                 * schema恢复结束时间。
                 * @example `2020-11-05T06:45:18Z`
                 */
                EndTime: string;
                /**
                 * 报错时的错误信息。
                 * @example `null`
                 */
                Message: string;
                /**
                 * schema恢复开始时间。
                 * @example `2020-11-05T06:45:14Z`
                 */
                StartTime: string;
                /**
                 * schema恢复表名。
                 * @example `default:test1`
                 */
                Table: string;
                /**
                 * schema恢复状态。
                 * @example `SUCCEEDED`
                 */
                State: string;
            }[];
        };
    };
    /**
     * 全量恢复详情。
     */
    RestoreFull: {
        /**
         * 成功个数。
         * @example `1`
         */
        Succeed: number;
        /**
         * 总数据量。
         * @example `1.2 kB`
         */
        DataSize: string;
        /**
         * 总速度。
         * @example `0.00 MB/s`
         */
        Speed: string;
        /**
         * 页面大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 全量恢复失败个数。
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
             * 全量恢复表详情信息。
             */
            RestoreFullDetail: {
                /**
                 * 结束时间。
                 * @example `2020-11-05T06:45:51Z`
                 */
                EndTime: string;
                /**
                 * 开始时间。
                 * @example `2020-11-05T06:45:45Z`
                 */
                StartTime: string;
                /**
                 * 进度。
                 * @example `14/14`
                 */
                Process: string;
                /**
                 * 该表数据量。
                 * @example `1.2 kB`
                 */
                DataSize: string;
                /**
                 * 恢复速度。
                 * @example `0.00 MB/s`
                 */
                Speed: string;
                /**
                 * 状态。
                 * @example `SUCCEEDED`
                 */
                State: string;
                /**
                 * 报错信息。
                 * @example `“”`
                 */
                Message: string;
                /**
                 * 表名。
                 * @example `default:test1`
                 */
                Table: string;
            }[];
        };
    };
    /**
     * 增量恢复详情。
     */
    RestoreIncrDetail: {
        /**
         * 结束时间。
         * @example `2020-11-05T06:45:44Z`
         */
        EndTime: string;
        /**
         * 开始时间。
         * @example `2020-11-05T06:45:44Z`
         */
        StartTime: string;
        /**
         * 完成进度。
         * @example `0/0`
         */
        Process: string;
        /**
         * 同步起始点位。
         * @example `2020-11-02T18:00:00Z`
         */
        RestoreStartTs: string;
        /**
         * 状态。
         * @example `SUCCEEDED`
         */
        State: string;
        /**
         * 同步点位。
         * @example `“”`
         */
        RestoredTs: string;
        /**
         * 同步延时。
         * @example `0 ms`
         */
        RestoreDelay: string;
    };
}
