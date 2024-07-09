export interface DescribeDomainTrafficDataResponse {
    /**
     * 结束时间。
     * @example `2015-12-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2015-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `B955107D-E658-4E77-B913-E0AC3D31693E`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，单位：秒。
     * @example `300`
     */
    DataInterval: string;
    TrafficDataPerInterval: {
        /**
         * 每个时间间隔的流量数据列表。单位：Byte。
         */
        DataModule: {
            /**
             * L1节点的HTTPS流量（中国内地）。
             * @example `0`
             */
            HttpsDomesticValue: string;
            /**
             * 总流量。
             * @example `423304182`
             */
            Value: string;
            /**
             * 全球（不包含中国内地）流量。
             * @example `0`
             */
            OverseasValue: string;
            /**
             * L1节点的HTTPS总流量。
             * @example `423304182`
             */
            HttpsValue: string;
            /**
             * L1节点的HTTPS流量（全球（不包含中国内地））。
             * @example `0`
             */
            HttpsOverseasValue: string;
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * 中国内地流量。
             * @example `0`
             */
            DomesticValue: string;
        }[];
    };
}
