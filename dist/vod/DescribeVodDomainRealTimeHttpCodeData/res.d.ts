export interface DescribeVodDomainRealTimeHttpCodeDataResponse {
    /**
     * 数据的结束时间点。
     * @example `2019-11-30T05:40:00Z`
     */
    EndTime: string;
    /**
     * 数据的起始时间点。
     * @example `2019-11-30T05:39:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `BC858082-736F-4A25-867B-E5B67C85ACF7`
     */
    RequestId: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条数据的时间间隔，单位：秒。
     * @example `60`
     */
    DataInterval: string;
    RealTimeHttpCodeData: {
        /**
         * 每个时间间隔的HTTP状态码占比数据。
         */
        UsageData: {
            /**
             * 数据时间戳。日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2019-11-30T05:39:00Z`
             */
            TimeStamp: string;
            Value: {
                /**
                 * 各状态码占比使用数据列表。
                 */
                RealTimeCodeProportionData: {
                    /**
                     * HTTP状态码。
                     * @example `500`
                     */
                    Code: string;
                    /**
                     * 该HTTP状态码的占比（百分比数据）。
                     * @example `28.4496124031008`
                     */
                    Proportion: string;
                    /**
                     * 该HTTP状态码的总数。
                     * @example `100`
                     */
                    Count: string;
                }[];
            };
        }[];
    };
}
