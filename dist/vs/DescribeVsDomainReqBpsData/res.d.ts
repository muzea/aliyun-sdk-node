export interface DescribeVsDomainReqBpsDataResponse {
    /**
     * 结束时间
     * @example `2021-09-24T03:30:46Z`
     */
    EndTime: string;
    /**
     * 开始时间
     * @example `2021-12-24T16:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 视图计算域名名称
     * @example `example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，以秒为单位。
     * @example `3600`
     */
    DataInterval: string;
    ReqBpsDataPerInterval: {
        /**
         * 数据列表。
         */
        DataModule: {
            /**
             * 时间片起始时刻。
             * @example `2021-12-24T16:00:00Z`
             */
            TimeStamp: string;
            /**
             * bps数据值，单位：bit/second
             * @example `1000`
             */
            ReqBpsValue: string;
        }[];
    };
}
