export interface DescribeVsDomainTrafficDataResponse {
    /**
     * 结束时间。
     * @example `2021-09-20T07:10:42Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2021-10-25T16:00:00Z`
     */
    StartTime: string;
    /**
     * 该条任务请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 视图计算域名名称
     * @example `example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 时间间隔，单位：秒。
     * @example `3600`
     */
    DataInterval: string;
    TrafficDataPerInterval: {
        /**
         * 每个时间间隔的流量数据。
         */
        DataModule: {
            /**
             * 流量数据值。单位：Byte。
             * @example `100`
             */
            TrafficValue: string;
            /**
             * 时间片起始时刻。
             * @example `2021-09-20T07:10:42Z`
             */
            TimeStamp: string;
        }[];
    };
}
