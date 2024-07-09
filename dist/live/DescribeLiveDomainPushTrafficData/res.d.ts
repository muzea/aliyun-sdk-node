export interface DescribeLiveDomainPushTrafficDataResponse {
    /**
     * 结束时间。
     * @example `2017-12-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2017-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F`
     */
    RequestId: string;
    /**
     * 推流域名。
     * @example `demo.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 数据时间粒度。
     * @example `300`
     */
    DataInterval: string;
    TrafficDataPerInterval: {
        /**
         * 每个时间间隔的流量数据。
         */
        DataModule: {
            /**
             * 流量数据值。单位：Byte。
             * @example `1288111`
             */
            TrafficValue: string;
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T20:05:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
