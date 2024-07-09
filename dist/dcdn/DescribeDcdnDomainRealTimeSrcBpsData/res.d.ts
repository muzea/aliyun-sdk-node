export interface DescribeDcdnDomainRealTimeSrcBpsDataResponse {
    /**
     * 结束时间。
     * @example `2015-12-10T20:01:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2015-12-10T20:00:00Z`
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
     * 根据单次查询的最大时间跨度不同，该参数固定返回60（1分钟）、300（5分钟）或3600（1小时），具体请参见**使用说明**中返回数据时间粒度。
     * @example `60`
     */
    DataInterval: string;
    RealTimeSrcBpsDataPerInterval: {
        /**
         * 每个时间间隔的回源带宽数据，单位：bit/s。
         */
        DataModule: {
            /**
             * 详细使用数据。
             * @example `0`
             */
            Value: string;
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T20:01:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
