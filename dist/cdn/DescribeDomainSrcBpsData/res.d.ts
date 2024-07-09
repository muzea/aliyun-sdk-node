export interface DescribeDomainSrcBpsDataResponse {
    /**
     * 结束时间。
     * @example `2019-12-10T20:30:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2019-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，单位：秒。
     * @example `300`
     */
    DataInterval: string;
    SrcBpsDataPerInterval: {
        /**
         * 每个时间间隔的回源带宽数据列表。单位：bit/s。
         */
        DataModule: {
            /**
             * 详细使用数据。
             * @example `500`
             */
            Value: string;
            /**
             * 时间片起始时刻。
             * @example `2019-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * Https回源带宽。
             * @example `10`
             */
            HttpsValue: string;
        }[];
    };
}
