export interface DescribeLiveStreamPushMetricDetailDataResponse {
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 获取数据结束时间点，日期格式按照ISO8601表示法，并使用UTC时间。
     * 格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2022-09-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 分页查询token，每次查询最多返回5000行数据，当要查询的数据超过5000行时，响应数据会提供下次查询数据的起始索引。
     * 请求时传入该token，将从上一次查询结束的下一行继续查询未获取的数据。
     * @example `UjsM9x3aVcJi9a0-ArwJUTTC67C***37C0=`
     */
    NextPageToken: string;
    /**
     * 返回数据行数。
     * @example `5000`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `5EBF2AC3-4B73-40A5-8B32-83F49D5F035E`
     */
    RequestId: string;
    /**
     * 获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间。
     * 格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2022-09-10T20:00:00Z`
     */
    StartTime: string;
    StreamDetailData: {
        /**
         * 返回数据组。
         */
        StreamData: {
            /**
             * 应用名称。
             * @example `liveApp****`
             */
            AppName: string;
            /**
             * 流每分钟总带宽，单位：Bps。
             * @example `133.33`
             */
            ReqBps: number;
            /**
             * 流每分钟总流量，单位：Byte。
             * @example `1000`
             */
            ReqTraffic: number;
            /**
             * 流名称。
             * @example `liveStream****`
             */
            StreamName: string;
            /**
             * 时间片起始时刻。
             * @example `2022-09-10T20:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
