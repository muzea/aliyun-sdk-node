export interface DescribeDomainUvDataResponse {
    /**
     * 获取数据结束时间点。
     * @example `2019-11-29T04:00:00Z`
     */
    EndTime: string;
    /**
     * 获取数据起始时间点。
     * @example `2019-11-29T00:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `E9D3257A-1B7C-414C-90C1-8D07AC47BCAC`
     */
    RequestId: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 时间间隔，单位：秒。
     * @example `3600`
     */
    DataInterval: string;
    UvDataInterval: {
        /**
         * 每个时间间隔的页面独立访问次数列表。
         */
        UsageData: {
            /**
             * 详细使用数据。
             * @example `318`
             */
            Value: string;
            /**
             * 时间片起始时刻。
             * @example `2019-11-29T00:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
