export interface DescribeVodDomainHitRateDataResponse {
    /**
     * 数据的结束时间点。
     * @example `2024-01-20T14:59:58Z`
     */
    EndTime: string;
    /**
     * 数据的起始时间点。
     * @example `2024-01-20T13:59:58Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `D94E471F-1A27-442E-552D-D4D2000C****`
     */
    RequestId: string;
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
    HitRateInterval: {
        /**
         * 每个时间间隔的字节命中率数据列表。
         */
        DataModule: {
            /**
             * 总字节命中率。
             * @example `100`
             */
            Value: string;
            /**
             * 数据时间戳。日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2024-01-20T13:59:58Z`
             */
            TimeStamp: string;
            /**
             * HTTPS字节命中率。
             * @example `50`
             */
            HttpsValue: string;
        }[];
    };
}
