export interface ListSuccessInstanceAmountResponse {
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `952795279527ab****`
     */
    RequestId: string;
    /**
     * 在业务日期的不同时刻，运行成功的实例数量统计趋势数据。
     */
    InstanceStatusTrend: {
        /**
         * 业务日期当天的趋势。
         */
        TodayTrend: {
            /**
             * 时间点。取值范围为00:00～23:00中的整点小时时间，例如00:00、01:00、02:00等等。
             * @example `01:00`
             */
            TimePoint: string;
            /**
             * 运行成功的实例数量。
             * @example `10`
             */
            Count: number;
        }[];
        /**
         * 业务日期前一天的趋势。
         */
        YesterdayTrend: {
            /**
             * 时间点。取值范围为00:00～23:00中的整点小时时间，例如00:00、01:00、02:00等等。
             * @example `01:00`
             */
            TimePoint: string;
            /**
             * 运行成功的实例数量。
             * @example `10`
             */
            Count: number;
        }[];
        /**
         * 历史平均趋势。
         */
        AvgTrend: {
            /**
             * 时间点。取值范围为00:00～23:00中的整点小时时间，例如00:00、01:00、02:00等等。
             * @example `01:00`
             */
            TimePoint: string;
            /**
             * 运行成功的实例数量。
             * @example `10`
             */
            Count: number;
        }[];
    };
}
