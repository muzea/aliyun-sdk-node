export interface DescribeInstDbLogInfoResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `A5438952-70EE-4FA5-87A9-080DB0ASD45F`
     */
    RequestId: string;
    /**
     * 可查询时间。
     */
    LogTimeRange: {
        /**
         * 结束时间。
         * @example `1568367711`
         */
        SupportOldestTime: number;
        /**
         * 开始时间。
         * @example `1568267711`
         */
        SupportLatestTime: number;
    };
}
