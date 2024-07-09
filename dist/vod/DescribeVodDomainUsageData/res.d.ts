export interface DescribeVodDomainUsageDataResponse {
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-12-10T12:20:00Z`
     */
    EndTime: string;
    /**
     * 数据类型。取值：
     * - **bps**：带宽。
     *  - **traf**：流量。
     * @example `bps`
     */
    Type: string;
    /**
     * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-12-10T10:20:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `B955107D-E658-4E77-****-E0AC3D31693E`
     */
    RequestId: string;
    /**
     * 用量区域。
     * @example `CN`
     */
    Area: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔。单位：秒。
     * @example `300`
     */
    DataInterval: string;
    UsageDataPerInterval: {
        /**
         * 流量或带宽用量数据。
         */
        DataModule: {
            /**
             * 流量或带宽用量。单位：bit/second。
             * @example `2592.3920000000003`
             */
            Value: string;
            /**
             * 时间片起始时刻。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-12-10T10:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
