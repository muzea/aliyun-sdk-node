export interface DescribeDomainRealTimeHttpCodeDataResponse {
    /**
     * 结束时间。
     * @example `2019-11-29T05:42:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2019-11-29T05:39:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `BC858082-736F-4A25-867B-E5B67C85ACF7`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com,example.org`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，单位：秒。
     * 根据单次查询的最大时间跨度不同，该参数固定返回60（1分钟）、300（5分钟）或3600（1小时），具体请参见使用说明中返回数据时间粒度。
     * @example `60`
     */
    DataInterval: string;
    RealTimeHttpCodeData: {
        /**
         * 每个时间间隔的HTTP返回码占比数据。
         */
        UsageData: {
            /**
             * 时间片起始时刻。
             * @example `2019-11-29T05:39:00Z`
             */
            TimeStamp: string;
            Value: {
                /**
                 * 各返回码占比使用数据列表。
                 */
                RealTimeCodeProportionData: {
                    /**
                     * HTTP返回码。
                     * @example `500`
                     */
                    Code: string;
                    /**
                     * 占比使用数据。
                     * @example `28.4496124031008`
                     */
                    Proportion: string;
                    /**
                     * 总数。
                     * @example `100`
                     */
                    Count: string;
                }[];
            };
        }[];
    };
}
