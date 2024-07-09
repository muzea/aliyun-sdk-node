export interface ListSnapshotsResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 视频截图数据。
     */
    MediaSnapshot: {
        /**
         * 截图作业创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-12-20T12:23:45Z`
         */
        CreationTime: string;
        /**
         * 截图地址生成规则。
         * @example `http://example.aliyundoc.com/snapshot/sample{SnapshotCount}.jpg`
         */
        Regular: string;
        /**
         * 截图总数。
         * @example `100`
         */
        Total: number;
        /**
         * 截图作业ID。
         * @example `ad90a501b1b9472374ad005046****`
         */
        JobId: string;
        Snapshots: {
            /**
             * 截图详情。
             */
            Snapshot: {
                /**
                 * 截图索引值。
                 * @example `1`
                 */
                Index: number;
                /**
                 * 截图访问地址。
                 * @example `http://example.aliyundoc.com/snapshot/sample00001****.jpg`
                 */
                Url: string;
            }[];
        };
    };
}
