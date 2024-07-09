export interface DescribeVodDomainTrafficDataResponse {
    /**
     * 数据的结束时间点。
     * @example `2019-01-20T14:59:58Z`
     */
    EndTime: string;
    /**
     * 数据的起始时间点。
     * @example `2019-01-20T13:59:58Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `D94E471F-1A27-442E-552D-D4D2000C****`
     */
    RequestId: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 总流量。
     * @example `5906662826`
     */
    TotalTraffic: string;
    /**
     * 每条记录的时间间隔，即数据的时间粒度。单位：秒。
     * @example `300
    `
     */
    DataInterval: string;
    TrafficDataPerInterval: {
        /**
         * 每个时间间隔的流量数据列表。
         */
        DataModule: {
            /**
             * L1节点的HTTPS流量（中国内地）。单位：Byte。
             * @example `0`
             */
            HttpsDomesticValue: string;
            /**
             * 总流量。单位：Byte。
             * @example `0`
             */
            Value: string;
            /**
             * 全球（不包含中国内地）流量。单位：Byte。
             * @example `0`
             */
            OverseasValue: string;
            /**
             * L1节点的HTTPS总流量。单位：Byte。
             * @example `0`
             */
            HttpsValue: string;
            /**
             * L1节点的HTTPS流量（全球（不包含中国内地））。单位：Byte。
             * @example `0`
             */
            HttpsOverseasValue: string;
            /**
             * 数据时间戳。日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2019-01-20T13:59:58Z`
             */
            TimeStamp: string;
            /**
             * 中国内地流量。单位：Byte。
             * @example `0`
             */
            DomesticValue: string;
        }[];
    };
}
