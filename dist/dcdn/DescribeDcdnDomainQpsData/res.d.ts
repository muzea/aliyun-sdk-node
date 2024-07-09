export interface DescribeDcdnDomainQpsDataResponse {
    /**
     * 结束时间。
     * @example `2017-12-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2017-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，以秒为单位。
     * @example `300`
     */
    DataInterval: string;
    QpsDataPerInterval: {
        /**
         * 每个时间间隔的每秒访问次数QPS。
         */
        DataModule: {
            /**
             * 动态HTTPS访问次数。
             * @example `0`
             */
            DynamicHttpsAcc: number;
            /**
             * 动态HTTP访问次数。
             * @example `0`
             */
            DynamicHttpAcc: number;
            /**
             * 总QPS。
             * @example `0.56`
             */
            Qps: number;
            /**
             * 静态HTTPS访问次数。
             * @example `0`
             */
            StaticHttpsAcc: number;
            /**
             * 静态HTTP QPS。
             * @example `0`
             */
            StaticHttpQps: number;
            /**
             * 静态HTTP访问次数。
             * @example `0`
             */
            StaticHttpAcc: number;
            /**
             * 动态HTTPS QPS。
             * @example `0`
             */
            DynamicHttpsQps: number;
            /**
             * 总访问次数。
             * @example `100`
             */
            Acc: number;
            /**
             * 静态HTTPS QPS。
             * @example `0`
             */
            StaticHttpsQps: number;
            /**
             * 动态HTTP QPS。
             * @example `0`
             */
            DynamicHttpQps: number;
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T21:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
