export interface DescribeLiveDomainRealTimeTrafficDataResponse {
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-12-10T15:01:00Z`
     */
    EndTime: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-12-10T15:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `A666D44F-19D6-490E-97CF-1A64AB962C57`
     */
    RequestId: string;
    /**
     * 播流域名。
     * @example `example.com,example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔。单位：秒。
     * @example `60`
     */
    DataInterval: string;
    RealTimeTrafficDataPerInterval: {
        /**
         * 每个时间间隔的流量数据。
         */
        DataModule: {
            /**
             * 流量数据。单位：字节。
             * @example `0`
             */
            Value: string;
            /**
             * 时间片起始时刻。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-12-10T15:01:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
