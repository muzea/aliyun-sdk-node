export interface DescribeVodDomainSrcBpsDataResponse {
    /**
     * 数据的结束时间点。
     * @example `2022-08-23T02:02:57Z`
     */
    EndTime: string;
    /**
     * 数据的起始时间点。
     * @example `2022-07-12T16:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-BEF6-****`
     */
    RequestId: string;
    /**
     * 加速域名。
     * @example `sample.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，即数据的时间粒度。单位：秒。
     * @example `300`
     */
    DataInterval: string;
    SrcBpsDataPerInterval: {
        /**
         * 每个时间间隔的回源带宽数据列表。
         */
        DataModule: {
            /**
             * 总回源带宽数据，单位：bit/s。
             * @example `0`
             */
            Value: string;
            /**
             * 数据时间戳。日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2022-07-12T16:00:00Z`
             */
            TimeStamp: string;
            /**
             * Https回源带宽数据，单位：bit/s。
             * @example `0`
             */
            HttpsValue: string;
        }[];
    };
}
