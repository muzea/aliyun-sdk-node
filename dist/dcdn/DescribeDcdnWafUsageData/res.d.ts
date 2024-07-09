export interface DescribeDcdnWafUsageDataResponse {
    /**
     * 结束时间。
     * @example `2018-10-01T16:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2018-09-30T16:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `CB1A380B-09F0-41BB-802B-72F8FD6DA2FE`
     */
    RequestId: string;
    WafUsageData: {
        /**
         * 加速域名使用WAF信息。
         */
        WafUsageDataItem: {
            /**
             * 观察的请求数。
             * @example `300`
             */
            ObserveCnt: number;
            /**
             * 加速域名。
             * @example `example.com`
             */
            Domain: string;
            /**
             * 拦截的请求数。
             * @example `300`
             */
            BlockCnt: number;
            /**
             * 正常访问的请求数。
             * @example `600`
             */
            AccessCnt: number;
            /**
             * 时间片起始时刻。
             * @example `2018-09-30T16:00:00Z`
             */
            TimeStamp: string;
            /**
             * 产生的SeCU计量单元数。
             * @example `50`
             */
            SecCu: number;
        }[];
    };
}
