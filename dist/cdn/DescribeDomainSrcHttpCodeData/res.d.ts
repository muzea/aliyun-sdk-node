export interface DescribeDomainSrcHttpCodeDataResponse {
    /**
     * 结束时间。
     * @example `2015-11-30T05:40:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2015-11-30T05:33:00Z`
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
     * @example `300`
     */
    DataInterval: string;
    HttpCodeData: {
        /**
         * 每个时间间隔的HTTP返回码占比数据。
         */
        UsageData: {
            /**
             * 时间片起始时刻。
             * @example `2015-11-30T05:30:00Z`
             */
            TimeStamp: string;
            Value: {
                /**
                 * 各返回码占比使用数据列表。
                 */
                CodeProportionData: {
                    /**
                     * HTTP返回码。
                     * @example `200`
                     */
                    Code: string;
                    /**
                     * 占比使用数据。
                     * @example `67.1458998935037`
                     */
                    Proportion: string;
                    /**
                     * 总数。
                     * @example `2300`
                     */
                    Count: string;
                }[];
            };
        }[];
    };
}
