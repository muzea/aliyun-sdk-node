export interface DescribeVodDomainBpsDataByLayerResponse {
    /**
     * 每条记录的时间间隔，即数据的时间粒度。单位：秒。
     * @example `300`
     */
    DataInterval: number;
    /**
     * 请求ID。
     * @example `25818875-5F78-4A*****F6-D7393642CA58`
     */
    RequestId: string;
    BpsDataInterval: {
        /**
         * 每个时间间隔的每秒访问次数Bps数据列表。
         */
        DataModule: {
            /**
             * 峰值带宽，单位：bps。
             * @example `75.33`
             */
            Value: number;
            /**
             * 总流量，单位：字节。
             * @example `1000`
             */
            TrafficValue: number;
            /**
             * 数据时间戳。日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2019-01-23T12:35:12Z`
             */
            TimeStamp: string;
        }[];
    };
}
