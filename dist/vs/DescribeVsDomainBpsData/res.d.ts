export interface DescribeVsDomainBpsDataResponse {
    /**
     * 结束时间
     * @example `2021-10-01T07:10:48Z`
     */
    EndTime: string;
    /**
     * 开始时间
     * @example `2021-09-18T16:00:00Z`
     */
    StartTime: string;
    /**
     * 本次操作请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 域名
     * @example `example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔。单位：秒。
     * @example `2100`
     */
    DataInterval: string;
    BpsDataPerInterval: {
        /**
         * 每个时间间隔的网络带宽数据。
         */
        DataModule: {
            /**
             * bps数据值，单位：bit/second
             * @example `1000`
             */
            BpsValue: string;
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T20:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
