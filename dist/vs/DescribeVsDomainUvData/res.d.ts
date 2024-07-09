export interface DescribeVsDomainUvDataResponse {
    /**
     * 结束时间
     * @example `2015-11-30T00:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间
     * @example `2015-11-29T00:00:00Z`
     */
    StartTime: string;
    /**
     * 本次操作请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 视图计算域名名称
     * @example `example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，以秒为单位，固定值1小时。
     * @example `3600`
     */
    DataInterval: string;
    UvDataInterval: {
        /**
         * 返回数据。
         */
        UsageData: {
            /**
             * 独立访客量（UV）。
             * @example `100`
             */
            Value: string;
            /**
             * 时间片起始时刻。
             * @example `2015-11-29T15:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
