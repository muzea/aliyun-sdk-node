export interface DescribeLiveDomainBpsDataResponse {
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-10T09:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-10T08:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `B955107D-E658-4E77-B913-E0AC3D31693E`
     */
    RequestId: string;
    /**
     * 播流域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 查询数据的时间粒度，单位是秒。
     * @example `300`
     */
    DataInterval: string;
    BpsDataPerInterval: {
        /**
         * 每个时间间隔的网络带宽数据。
         */
        DataModule: {
            /**
             * bps数据值，单位：bit/second。
             * @example `11288111`
             */
            BpsValue: string;
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T08:00:05Z`
             */
            TimeStamp: string;
            /**
             * HTTPS的bps数据值，单位：bit/second。
             * @example `2000`
             */
            HttpsBpsValue: string;
            /**
             * HTTP的bps数据值，单位：bit/second。
             * @example `11286111`
             */
            HttpBpsValue: string;
        }[];
    };
}
