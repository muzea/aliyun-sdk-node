export interface DescribeDomainAverageResponseTimeResponse {
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
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F`
     */
    RequestId: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 数据时间间隔。
     * @example `300`
     */
    DataInterval: string;
    AvgRTPerInterval: {
        /**
         * 每个时间点平均响应时间列表。
         */
        DataModule: {
            /**
             * 平均响应时间。
             * @example `3`
             */
            Value: string;
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T20:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
