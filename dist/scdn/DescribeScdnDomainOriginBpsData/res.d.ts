export interface DescribeScdnDomainOriginBpsDataResponse {
    /**
     * 请求ID。
     * @example `7CBCD6AD-B016-42E5-AE0B-B3731DE8F755`
     */
    RequestId: string;
    /**
     * 安全加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 开始时间。
     * @example `2017-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 结束时间。
     * @example `2017-12-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 每条记录的时间间隔，以秒为单位。
     * @example `300`
     */
    DataInterval: string;
    OriginBpsDataPerInterval: {
        /**
         * 每个时间间隔的回源带宽数据。
         */
        DataModule: {
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T21:00:00Z`
             */
            TimeStamp: string;
            /**
             * 回源带宽数据。
             * @example `200`
             */
            OriginBpsValue: string;
            /**
             * HTTP回源带宽数据。
             * @example `100`
             */
            HttpOriginBpsValue: string;
            /**
             * HTTPS回源带宽数据。
             * @example `100`
             */
            HttpsOriginBpsValue: string;
        }[];
    };
}
