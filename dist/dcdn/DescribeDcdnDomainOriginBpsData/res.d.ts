export interface DescribeDcdnDomainOriginBpsDataResponse {
    /**
     * 结束时间。
     * @example `2019-12-11T00:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2019-12-10T00:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `7CBCD6AD-B016-42E5-AE0B-B3731DE8F755`
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
    OriginBpsDataPerInterval: {
        /**
         * 每个时间间隔的回源带宽数据，单位：bit/s。
         */
        DataModule: {
            /**
             * 动态HTTP回源带宽数据。
             * @example `100`
             */
            DynamicHttpOriginBps: number;
            /**
             * 静态HTTP回源带宽数据。
             * @example `100`
             */
            StaticHttpOriginBps: number;
            /**
             * 时间片起始时刻。
             * @example `2019-12-10T00:00:00Z`
             */
            TimeStamp: string;
            /**
             * 静态HTTPS回源带宽数据。
             * @example `100`
             */
            StaticHttpsOriginBps: number;
            /**
             * 回源带宽数据。
             * @example `100`
             */
            OriginBps: number;
            /**
             * 动态HTTPS回源带宽数据。
             * @example `100`
             */
            DynamicHttpsOriginBps: number;
        }[];
    };
}
