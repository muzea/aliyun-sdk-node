export interface DescribeVodDomainReqHitRateDataResponse {
    /**
     * 数据的结束时间点。
     * @example `2023-12-22T08:00:00Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `D94E471F-1A27-442E-552D-D4D2000C****`
     */
    RequestId: string;
    Data: {
        /**
         * 每个时间间隔的请求命中率数据列表。
         */
        DataModule: {
            /**
             * 总请求命中率。
             * @example `100`
             */
            Value: string;
            /**
             * 数据时间戳。日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2023-12-21T08:00:00Z`
             */
            TimeStamp: string;
            /**
             * HTTPS请求命中率。
             * @example `50`
             */
            HttpsValue: string;
        }[];
    };
    /**
     * 数据的起始时间点。
     * @example `2023-12-21T08:00:00Z`
     */
    StartTime: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条数据的时间间隔，即数据的时间粒度。单位：秒。
     * @example `300`
     */
    DataInterval: string;
}
