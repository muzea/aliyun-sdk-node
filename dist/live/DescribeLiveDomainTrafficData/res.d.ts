export interface DescribeLiveDomainTrafficDataResponse {
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-10T15:00:00Z`
     */
    EndTime: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-10T14:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `B955107D-E658-4E77-B913-E0AC3D31693E`
     */
    RequestId: string;
    /**
     * 播流域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 查询数据的时间粒度。
     * @example `300`
     */
    DataInterval: string;
    TrafficDataPerInterval: {
        /**
         * 每个时间间隔的流量数据。
         */
        DataModule: {
            /**
             * 总流量。单位：Byte。
             * @example `454680793`
             */
            TrafficValue: string;
            /**
             * HTTP流量。单位：Byte。
             * @example `0`
             */
            HttpTrafficValue: string;
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T15:00:05Z`
             */
            TimeStamp: string;
            /**
             * HTTPS流量。单位：Byte。
             * @example `454680793`
             */
            HttpsTrafficValue: string;
        }[];
    };
}
