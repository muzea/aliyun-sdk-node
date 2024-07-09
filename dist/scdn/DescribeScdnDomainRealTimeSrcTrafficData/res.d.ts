export interface DescribeScdnDomainRealTimeSrcTrafficDataResponse {
    /**
     * 结束时间
     * @example `2015-12-10T20:01:00Z`
     */
    EndTime: string;
    /**
     * 开始时间
     * @example `2015-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID
     * @example `A666D44F-19D6-490E-97CF-1A64AB962C57`
     */
    RequestId: string;
    /**
     * 加速域名信息
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，以秒为单位。
     * @example `60`
     */
    DataInterval: string;
    RealTimeSrcTrafficDataPerInterval: {
        /**
         * 每个时间间隔的回源流量数据
         */
        DataModule: {
            /**
             * 详细使用数据
             * @example `0`
             */
            Value: string;
            /**
             * 时间片起始时刻
             * @example `2015-12-10T20:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
