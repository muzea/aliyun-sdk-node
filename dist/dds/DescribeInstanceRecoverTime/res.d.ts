export interface DescribeInstanceRecoverTimeResponse {
    /**
     * 请求ID。
     * @example `F8CA8312-530A-413A-9129-F2BB32A8D404`
     */
    RequestId: string;
    /**
     * 可恢复时间段列表。包含所有可用于按时间点恢复的时间段
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
         * * PointInTime（默认）：基于时间点恢复。
         * @example `PointInTime`
         */
        RestoreType: string;
    }[];
}
