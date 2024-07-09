export interface GetSuccessInstanceTrendResponse {
    /**
     * 每次请求生成的唯一标识。
     * @example `952795279527ab****`
     */
    RequestId: string;
    /**
     * 分时段实例状态的统计趋势。
     */
    InstanceStatusTrend: {
        /**
         * 今日趋势。
         */
        TodayTrend: {
            /**
             * 时间点，分别为00:00～23:00。
             * @example `01:00`
             */
            TimePoint: string;
            /**
             * 实例的数量。
             * @example `10`
             */
            Count: number;
        }[];
        /**
         * 昨日的趋势。
         */
        YesterdayTrend: {
            /**
             * 时间点，分别为00:00～23:00。
             * @example `01:00`
             */
            TimePoint: string;
            /**
             * 实例的数量。
             * @example `10`
             */
            Count: number;
        }[];
        /**
         * 历史平均趋势。
         */
        AvgTrend: {
            /**
             * 时间点，分别为00:00～23:00。
             * @example `01:00`
             */
            TimePoint: string;
            /**
             * 实例的数量。
             * @example `10`
             */
            Count: number;
        }[];
    };
}
