export interface DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse {
    /**
     * 获取数据的结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-11-30T05:40:00Z`
     */
    EndTime: string;
    /**
     * 获取数据的开始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-11-30T05:33:00Z`
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
     * 每条记录的时间间隔，单位为秒。
     * 根据单次查询的最大时间跨度不同，该参数固定返回60（1分钟）、300（5分钟）或3600（1小时），具体请参见**使用说明**中返回数据时间粒度。
     * @example `60`
     */
    DataInterval: string;
    RealTimeSrcHttpCodeData: {
        /**
         * 每个时间间隔的HTTP返回码占比数据。
         */
        UsageData: {
            /**
             * 时间片起始时刻。
             * @example `2019-11-30T05:40:00Z`
             */
            TimeStamp: string;
            Value: {
                /**
                 * 各返回码占比使用数据列表。
                 */
                RealTimeSrcCodeProportionData: {
                    /**
                     * HTTP返回码。
                     * @example `200`
                     */
                    Code: string;
                    /**
                     * 占比使用数据。
                     * @example `66.046511627907`
                     */
                    Proportion: string;
                    /**
                     * 返回码数量。
                     * @example `2`
                     */
                    Count: string;
                }[];
            };
        }[];
    };
}
