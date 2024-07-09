export interface DescribeDomainMultiUsageDataResponse {
    /**
     * 查询用量的结束时间。
     * @example `2017-12-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 查询用量的开始时间。
     * @example `2017-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F`
     */
    RequestId: string;
    RequestPerInterval: {
        /**
         * 每五分钟各请求计量数据列表。
         */
        RequestDataModule: {
            /**
             * 类型。
             * > CDN产品只有Simple。
             * @example `Simple`
             */
            Type: string;
            /**
             * 返回数据中，请求数所在时间片段起始时刻。
             * @example `2017-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * 加速域名信息。
             * @example `example.com`
             */
            Domain: string;
            /**
             * 请求数，单位：个。
             * @example `11288111`
             */
            Request: number;
        }[];
    };
    TrafficPerInterval: {
        /**
         * 每五分钟各流量计量数据列表。
         */
        TrafficDataModule: {
            /**
             * 请求数类型。取值：
             * - **StaticHttps**：静态HTTPS请求数。
             * - **DynamicHttps**：动态HTTPS请求数。
             * - **DynamicHttp**：动态HTTP请求数。
             * - **StaticQuic**：静态QUIC请求数。
             * - **DynamicQuic**：动态QUIC请求数。
             * @example `DynamicHttp`
             */
            Type: string;
            /**
             * 域名名称。
             * @example `example.com`
             */
            Domain: string;
            /**
             * 返回数据中，用量数据所在时间片段起始时刻。
             * @example `2017-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * 大区名称。
             * @example `CN`
             */
            Area: string;
            /**
             * 比特率，单位：bit/second。
             * @example `11288111.1`
             */
            Bps: number;
        }[];
    };
}
