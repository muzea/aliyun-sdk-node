export interface DescribeVodDomainSrcTrafficDataResponse {
    /**
     * 数据的结束时间点。
     * @example `2022-09-23T15:59:59Z`
     */
    EndTime: string;
    /**
     * 数据的起始时间点。
     * @example `2022-08-29T16:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 总流量数据，单位：Byte。
     * @example `5906662826`
     */
    TotalTraffic: string;
    /**
     * 每条记录的时间间隔，即数据的时间粒度。单位：秒。
     * @example `300`
     */
    DataInterval: string;
    SrcTrafficDataPerInterval: {
        /**
         * 每个时间间隔的回源流量数据列表。
         */
        DataModule: {
            /**
             * 总回源流量数据，单位：Byte。
             * @example `0`
             */
            Value: string;
            /**
             * 数据时间戳。日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2022-08-29T16:00:00Z`
             */
            TimeStamp: string;
            /**
             * Https回源流量数据，单位：Byte。
             * @example `0`
             */
            HttpsValue: string;
        }[];
    };
}
