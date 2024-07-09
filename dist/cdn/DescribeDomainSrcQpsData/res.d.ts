export interface DescribeDomainSrcQpsDataResponse {
    /**
     * 结束时间。
     * @example `2019-11-30T05:40:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2019-11-30T05:33:00Z`
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
    SrcQpsDataPerInterval: {
        /**
         * 每个时间间隔的回源带宽数据。
         */
        DataModule: {
            /**
             * 详细使用数据。
             * @example `0`
             */
            Value: string;
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T21:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
