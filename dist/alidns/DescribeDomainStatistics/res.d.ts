export interface DescribeDomainStatisticsResponse {
    /**
     * 唯一请求识别码。
     * @example `6AEC7A64-3CB1-4C49-8B35-0B901F1E26BF`
     */
    RequestId: string;
    Statistics: {
        /**
         * 请求量数据列表。
         */
        Statistic: {
            /**
             * 统计时间戳。单位：毫秒。
             * @example `1556640000000`
             */
            Timestamp: number;
            /**
             * 请求量（次）。
             * @example `15292887`
             */
            Count: number;
            /**
             * 域名名称。
             * @example `example.com`
             */
            DomainName: string;
        }[];
    };
}
