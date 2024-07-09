export interface DescribeDcdnDomainRealTimeTrafficDataResponse {
    /**
     * 结束时间。
     * @example `2015-12-10T20:01:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2015-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `A666D44F-19D6-490E-97CF-1A64AB962C57`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，单位为秒。
     * 根据单次查询的最大时间跨度不同，该参数固定返回60（1分钟）、300（5分钟）或3600（1小时），具体请参见**使用说明**中返回数据时间粒度。
     * @example `60`
     */
    DataInterval: string;
    RealTimeTrafficDataPerInterval: {
        /**
         * 每个时间间隔的回源流量数据。
         */
        DataModule: {
            /**
             * 详细使用数据。
             * > 该接口数据单位：Byte。
             * @example `0`
             */
            Value: string;
            /**
             * 单位时间段的起始时间。
             * @example `2015-12-10T20:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
