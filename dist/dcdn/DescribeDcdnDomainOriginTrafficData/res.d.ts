export interface DescribeDcdnDomainOriginTrafficDataResponse {
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
     * @example `A666D44F-19D6-490E-97CF-1A64AB962C57`
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
    OriginTrafficDataPerInterval: {
        /**
         * 每个时间间隔的回源流量数据，单位：Byte。
         */
        DataModule: {
            /**
             * 动态HTTP回源流量数据。
             * @example `1000`
             */
            DynamicHttpOriginTraffic: number;
            /**
             * 静态HTTPS回源流量数据。
             * @example `100`
             */
            StaticHttpsOriginTraffic: number;
            /**
             * 回源流量数据。
             * @example `100`
             */
            OriginTraffic: number;
            /**
             * 静态HTTP回源流量数据。
             * @example `0`
             */
            StaticHttpOriginTraffic: number;
            /**
             * 动态HTTPS回源流量数据。
             * @example `500`
             */
            DynamicHttpsOriginTraffic: number;
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T21:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
