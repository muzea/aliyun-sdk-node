export interface DescribeSlowQueryTrendResponse {
    Data: {
        /**
         * 开始时间。格式：yyyy-MM-ddTHH:mmZ（UTC时间）。
         * @example `2021-02-02T08:00:00Z`
         */
        StartTime: string;
        /**
         * 慢查询数量。
         * @example `1`
         */
        Count: number;
        /**
         * 平均查询耗时。单位：毫秒。
         * @example `2000`
         */
        AvgDurationMs: number;
        /**
         * 最大查询耗时。单位：毫秒。
         * @example `3000`
         */
        MaxDurationMs: number;
        /**
         * 最小查询耗时。单位：毫秒。
         * @example `1000`
         */
        MinDurationMs: number;
    }[];
    /**
     * 请求ID。
     * @example `48CBEEBE-FA07-5A06-8BA4-567B92ADD6A0`
     */
    RequestId: string;
}
