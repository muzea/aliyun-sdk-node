export interface DescribeVsDomainPvDataResponse {
    /**
     * 结束时间
     * @example `2021-11-12T15:59:59Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2021-11-22T00:00:00Z`
     */
    StartTime: string;
    /**
     * 该条任务请求Id
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 视图计算域名名称
     * @example `example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，固定值1小时或1天。
     * @example `3600`
     */
    DataInterval: string;
    PvDataInterval: {
        /**
         * 返回数据。
         */
        UsageData: {
            /**
             * 详细使用数据
             * @example `100`
             */
            Value: string;
            /**
             * 时间片起始时刻
             * @example `2021-11-22T00:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
