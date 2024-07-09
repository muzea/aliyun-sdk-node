export interface DescribeDomainBpsDataByLayerResponse {
    /**
     * 每条记录的时间间隔，单位为秒。
     * @example `300`
     */
    DataInterval: string;
    /**
     * 请求ID。
     * @example `C565B910-BC3B-467B-9046-2A48566EA967`
     */
    RequestId: string;
    BpsDataInterval: {
        /**
         * 每个时间间隔的每秒访问次数Bps数据列表。
         */
        DataModule: {
            /**
             * 峰值带宽，单位：bps。
             * @example `75.68`
             */
            Value: string;
            /**
             * 总流量，单位：Byte。
             * @example `2838`
             */
            TrafficValue: string;
            /**
             * 时间片起始时刻。
             * @example `2020-05-06T07:10:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
