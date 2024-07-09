export interface DescribeDomainsUsageByDayResponse {
    /**
     * 结束时间。
     * @example `2019-12-23T09:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2019-12-22T08:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `C88EF8ED-72F0-45EA-9E86-95114E224FC5`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，单位：秒。
     * @example `86400`
     */
    DataInterval: string;
    /**
     * 汇总数据。
     */
    UsageTotal: {
        /**
         * 回源带宽峰值时刻。
         * @example `2019-12-23 11:45:00`
         */
        MaxSrcBpsTime: string;
        /**
         * 请求命中率（百分比数据）。
         * @example `69.92610837438424`
         */
        RequestHitRate: string;
        /**
         * 带宽峰值，单位：bps。
         * @example `1.0747912780000001E8`
         */
        MaxBps: string;
        /**
         * 总访问量。
         * @example `1319500`
         */
        TotalAccess: string;
        /**
         * 字节命中率（百分比数据）。
         * @example `97.03110726801242`
         */
        BytesHitRate: string;
        /**
         * 总流量，单位：Byte。
         * @example `1117711832100`
         */
        TotalTraffic: string;
        /**
         * 带宽峰值时刻。
         * @example `2019-12-23 10:55:00`
         */
        MaxBpsTime: string;
        /**
         * 回源带宽峰值，单位：bps。
         * @example `72584.072`
         */
        MaxSrcBps: string;
    };
    UsageByDays: {
        /**
         * 每个时间间隔统计数据。
         */
        UsageByDay: {
            /**
             * 回源带宽峰值时刻。
             * @example `2019-12-23 11:45:00`
             */
            MaxSrcBpsTime: string;
            /**
             * 每秒访问量（次/秒）。
             * @example `7.466354166666667`
             */
            Qps: string;
            /**
             * 请求命中率（百分比数据）。
             * @example `70.24770071912111`
             */
            RequestHitRate: string;
            /**
             * 带宽峰值，单位：bps。
             * @example `306747.76`
             */
            MaxBps: string;
            /**
             * 总访问量。
             * @example `645093`
             */
            TotalAccess: string;
            /**
             * 查询数据的时间片起始时刻。
             * @example `2019-12-22`
             */
            TimeStamp: string;
            /**
             * 字节命中率（百分比数据）。
             * @example `97.46250599529726`
             */
            BytesHitRate: string;
            /**
             * 总流量，单位：Byte。
             * @example `564300099309`
             */
            TotalTraffic: string;
            /**
             * 回源带宽峰值，单位：bps。
             * @example `72584.072`
             */
            MaxSrcBps: string;
            /**
             * 带宽峰值时刻。
             * @example `2019-12-23 10:55:00`
             */
            MaxBpsTime: string;
        }[];
    };
}
