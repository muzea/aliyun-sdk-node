export interface DescribeLiveDomainBpsDataByLayerResponse {
    BpsDataInterval: {
        /**
         * 每个时间间隔的每秒访问次数Bps。
         */
        DataModule: {
            /**
             * 时间片起始时刻。
             * @example `2022-03-15T16:00:00Z`
             */
            TimeStamp: string;
            /**
             * 总流量，单位：Byte。
             * @example `331`
             */
            TrafficValue: string;
            /**
             * 峰值带宽，单位：bps。
             * @example `0.56`
             */
            Value: string;
        }[];
    };
    /**
     * 每条数据记录的时间间隔，以秒为单位。
     * @example `300`
     */
    DataInterval: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-2A48566EA967`
     */
    RequestId: string;
}
