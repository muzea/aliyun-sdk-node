export interface DescribeVsDomainReqTrafficDataResponse {
    /**
     * 结束时间。
     * @example `2021-09-22T03:40:41Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2021-09-21T16:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `9BEC5E85-C76B-56EF-A922-860EFDB8B64B`
     */
    RequestId: string;
    /**
     * 视图计算域名名称
     * @example `example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 查询数据的时间粒度。
     * @example `3600`
     */
    DataInterval: string;
    ReqTrafficDataPerInterval: {
        /**
         * 每个时间间隔的请求数据。
         */
        DataModule: {
            /**
             * 总流量。
             * @example `10000`
             */
            ReqTrafficValue: string;
            /**
             * 时间片起始时刻。
             * @example `2021-09-22T03:40:41Z`
             */
            TimeStamp: string;
        }[];
    };
}
