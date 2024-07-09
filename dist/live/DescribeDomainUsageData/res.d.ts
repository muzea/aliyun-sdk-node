export interface DescribeDomainUsageDataResponse {
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-12-10T21:00Z`
     */
    EndTime: string;
    /**
     * 用量类型。
     * @example `all`
     */
    Type: string;
    /**
     * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-12-10T20:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `B955107D-E658-4E77-B913-E0AC3D31693E`
     */
    RequestId: string;
    /**
     * 用量区域。
     * @example `CN`
     */
    Area: string;
    /**
     * 直播域名。
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
         * 每条记录的流量数据。
         */
        DataModule: {
            /**
             * 用量。
             * - 当Field为traf或req_traf时单位是字节（Byte）。
             * - 当Field为bps或req_bps时单位是bps。
             * - 当Field为acc时单位是次数。
             * @example `423304182`
             */
            Value: string;
            /**
             * 时间片起始时刻。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-12-10T20:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
