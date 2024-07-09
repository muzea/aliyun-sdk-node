export interface DescribeDcdnDomainTrafficDataResponse {
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
     * 请求ID。
     * @example `B955107D-E658-4E77-B913-E0AC3D31693E`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，以秒为单位。
     * @example `300`
     */
    DataInterval: string;
    TrafficDataPerInterval: {
        /**
         * 每个时间间隔的流量数据，单位：Byte。
         */
        DataModule: {
            /**
             * 静态HTTP流量。
             * @example `123`
             */
            StaticHttpTraffic: number;
            /**
             * 动态HTTPS流量。
             * @example `0`
             */
            DynamicHttpsTraffic: number;
            /**
             * 总流量。
             * @example `0`
             */
            Traffic: number;
            /**
             * 动态HTTP流量。
             * @example `0`
             */
            DynamicHttpTraffic: number;
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * 静态HTTPS流量。
             * @example `132`
             */
            StaticHttpsTraffic: number;
        }[];
    };
}
