export interface DescribeClusterRecoverTimeResponse {
    /**
     * 请求ID。
     * @example `60EEBD77-227C-5B39-86EA-D89163C5****`
     */
    RequestId: string;
    /**
     * 集群备份集列表。集群备份里面包含每个节点的备份集。
     */
    RestoreRanges: {
        /**
         * 可恢复开始时间。
         * @example `2023-10-16T19:33:20Z`
         */
        RestoreBeginTime: string;
        /**
         * 可恢复结束时间。
         * @example `2023-10-16T19:43:20Z`
         */
        RestoreEndTime: string;
        /**
         * 恢复方式，取值说明：
         * * **PointInTime**（默认）：基于时间点恢复。
         * @example `PointInTime`
         */
        RestoreType: string;
    }[];
}
