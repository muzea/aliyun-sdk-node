export interface DescribeDcdnDomainRealTimeHttpCodeDataResponse {
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
     * @example `B955107D-E658-4E77-B913-E0AC3D31693E`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，以秒为单位。
     * @example `60`
     */
    DataInterval: string;
    RealTimeHttpCodeData: {
        /**
         * 各返回码占比使用数据列表。
         */
        UsageData: {
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T20:00:00Z`
             */
            TimeStamp: string;
            Value: {
                /**
                 * 返回码信息。
                 */
                RealTimeCodeProportionData: {
                    /**
                     * HTTP返回码。
                     * @example `200`
                     */
                    Code: string;
                    /**
                     * 占比使用数据。
                     * @example `0.01155980271270037`
                     */
                    Proportion: string;
                    /**
                     * 总数。
                     * @example `1`
                     */
                    Count: string;
                }[];
            };
        }[];
    };
}
