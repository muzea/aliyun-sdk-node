export interface DescribeLiveDomainRealTimeHttpCodeDataResponse {
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-11-30T05:40:00Z`
     */
    EndTime: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-11-30T05:33:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `BC858082-736F-4A25-867B-E5B67C85ACF7`
     */
    RequestId: string;
    /**
     * 播流域名。
     * @example `example.com,example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔。单位：秒。默认值为60。
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
             * @example `2015-11-30T05:39:00Z`
             */
            TimeStamp: string;
            Value: {
                /**
                 * 各返回码占比使用数据列表。
                 */
                RealTimeCodeProportionData: {
                    /**
                     * Http返回码。
                     * @example `200`
                     */
                    Code: string;
                    /**
                     * 响应数量占比。
                     * @example `66.046511627907`
                     */
                    Proportion: string;
                    /**
                     * 响应数量。
                     * @example `20`
                     */
                    Count: string;
                }[];
            };
        }[];
    };
}
