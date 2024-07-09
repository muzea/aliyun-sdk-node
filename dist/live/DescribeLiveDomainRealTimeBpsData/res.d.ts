export interface DescribeLiveDomainRealTimeBpsDataResponse {
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-11-30T05:40:00Z`
     */
    EndTime: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-11-30T05:33:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `BC858082-736F-4A25-867B-E5B67C85ACF7`
     */
    RequestId: string;
    /**
     * 播流域名信息。
     * @example `example.com,example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 查询数据的时间粒度。
     * @example `60`
     */
    DataInterval: string;
    RealTimeBpsDataPerInterval: {
        /**
         * 域名1分钟粒度带宽数据。
         */
        DataModule: {
            /**
             * 带宽数据，单位：bit/second。
             * @example `59392614.8`
             */
            Value: string;
            /**
             * 数据时间戳。
             * @example `2015-11-30T05:39:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
