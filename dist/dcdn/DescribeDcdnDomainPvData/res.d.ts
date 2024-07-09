export interface DescribeDcdnDomainPvDataResponse {
    /**
     * 结束时间。
     * @example `2019-11-29T00:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2019-11-28T00:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `BCD7D917-76F1-442F-BB75-C810DE34C761`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，单位：秒。
     * @example `3600`
     */
    DataInterval: string;
    PvDataInterval: {
        /**
         * 每个时间间隔的页面访问次数。
         */
        UsageData: {
            /**
             * 详细使用数据。
             * @example `9292`
             */
            Value: string;
            /**
             * 时间片起始时刻。
             * @example `2015-11-28T03:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
