export interface DescribeDcdnDomainMultiUsageDataResponse {
    /**
     * 结束时间。
     * @example `2017-12-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2017-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 该条任务请求Id。
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F`
     */
    RequestId: string;
    RequestPerInterval: {
        /**
         * 每五分钟各请求计量数据。
         */
        RequestDataModule: {
            /**
             * 请求数类型，可以是StaticHttps，DynamicHttps，DynamicHttp，StaticQuic，DynamicQuic之一。
             * @example `DynamicHttp`
             */
            Type: string;
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * 域名。
             * @example `example.com`
             */
            Domain: string;
            /**
             * 请求数，单位个。
             * @example `1128`
             */
            Request: number;
        }[];
    };
    TrafficPerInterval: {
        /**
         * 每五分钟的各流量计量数据。
         */
        TrafficDataModule: {
            /**
             * 类型，可以是Simple，IPA，WebSocket 之一。
             * @example `Simple`
             */
            Type: string;
            /**
             * 域名。
             * @example `example.com`
             */
            Domain: string;
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * 大区名称。
             * @example `CN`
             */
            Area: string;
            /**
             * BPS数据值，单位：bit/second
             * @example `11288111.1`
             */
            Bps: number;
        }[];
    };
}
