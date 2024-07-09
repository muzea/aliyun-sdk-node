export interface DescribeDohSubDomainStatisticsResponse {
    /**
     * 唯一请求识别码。
     * @example `0F32959D-417B-4D66-8463-68606605E3E2`
     */
    RequestId: string;
    /**
     * 统计数据列表。
     */
    Statistics: {
        /**
         * IPv6 HTTP 请求量。
         * @example `3141592653`
         */
        V6HttpCount: number;
        /**
         * IPv4 HTTPS 请求量。
         * @example `3141592653`
         */
        V4HttpsCount: number;
        /**
         * 统计时间戳。单位：毫秒。
         * @example `1544976000000`
         */
        Timestamp: number;
        /**
         * 请求总量。
         * @example `3141592653`
         */
        TotalCount: number;
        /**
         * IPv4 HTTP 请求量。
         * @example `3141592653`
         */
        V4HttpCount: number;
        /**
         * IPv6 HTTPS 请求量。
         * @example `3141592653`
         */
        V6HttpsCount: number;
    }[];
}
