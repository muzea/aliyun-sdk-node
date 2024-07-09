export interface DescribeScdnDomainUvDataResponse {
    /**
     * 结束时间。
     * @example `2015-11-30T00:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2015-11-29T00:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `E9D3257A-1B7C-414C-90C1-8D07AC47BCAC`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，单位为秒。
     * @example `300`
     */
    DataInterval: string;
    UvDataInterval: {
        /**
         * 每个时间间隔的页面独立访问次数。
         */
        UsageData: {
            /**
             * 详细使用数据。
             * @example `318`
             */
            Value: string;
            /**
             * 时间片起始时刻。
             * @example `2015-11-29T20:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
