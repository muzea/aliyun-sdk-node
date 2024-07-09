export interface DescribeRecordStatisticsResponse {
    /**
     * 请求ID。
     * @example `6AEC7A64-3CB1-4C49-8B35-0B901F1E26BF`
     */
    RequestId: string;
    Statistics: {
        /**
         * 请求量数据列表。
         */
        Statistic: {
            /**
             * 统计时间戳。
             * @example `1556640000000`
             */
            Timestamp: number;
            /**
             * 请求量（次）。
             * @example `15292887`
             */
            Count: number;
        }[];
    };
}
