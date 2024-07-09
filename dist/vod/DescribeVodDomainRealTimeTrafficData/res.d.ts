export interface DescribeVodDomainRealTimeTrafficDataResponse {
    /**
     * 数据的结束时间点。
     * @example `2019-12-10T20:01:00Z`
     */
    EndTime: string;
    /**
     * 数据的起始时间点。
     * @example `2019-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `A666D44F-19D6-490E-97CF-1A64AB962C57`
     */
    RequestId: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条数据的时间间隔，即数据的时间粒度，单位：秒。
     * @example `60`
     */
    DataInterval: string;
    RealTimeTrafficDataPerInterval: {
        /**
         * 每个时间间隔的流量数据详情。
         */
        DataModule: {
            /**
             * 流量数据，单位：Byte。
             * @example `0`
             */
            Value: string;
            /**
             * 数据时间戳。日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2019-12-10T20:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
