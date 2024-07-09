export interface DescribeDcdnDomainBpsDataByLayerResponse {
    /**
     * 每条记录的时间间隔，单位：秒。
     * @example `300`
     */
    DataInterval: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    BpsDataInterval: {
        /**
         * 每个时间间隔的每秒访问次数Bps。
         */
        DataModule: {
            /**
             * 总Bps。
             * @example `0.56`
             */
            Value: string;
            /**
             * 总流量，单位：字节。
             * @example `331`
             */
            TrafficValue: string;
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T21:00:00Z`
             */
            TimeStamp: string;
            /**
             * 动态总Bps。
             * @example `0.34`
             */
            DynamicValue: string;
            /**
             * 静态总Bps。
             * @example `0.22`
             */
            StaticValue: string;
            /**
             * 动态总流量，单位：字节。
             * @example `200`
             */
            DynamicTrafficValue: string;
            /**
             * 静态总流量，单位：字节。
             * @example `131`
             */
            StaticTrafficValue: string;
        }[];
    };
}
