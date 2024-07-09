export interface DescribeScdnDomainHttpCodeDataResponse {
    /**
     * 结束时间。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2018-03-01T13:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-03-01T05:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `91FC2D9D-B042-4634-8A5C-7B8E7482C22D`
     */
    RequestId: string;
    /**
     * 安全加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，以秒为单位，固定值为300s。
     * @example `3600`
     */
    DataInterval: string;
    DataPerInterval: {
        /**
         * 每个时间间隔的HTTP返回码占比数据。
         */
        DataModule: {
            /**
             * 时间片起始时刻。
             * @example `2018-03-01T13:00:00Z`
             */
            TimeStamp: string;
            HttpCodeDataPerInterval: {
                /**
                 * 各返回码占比使用数据列表。
                 */
                HttpCodeDataModule: {
                    /**
                     * HTTP返回码。
                     * @example `404`
                     */
                    Code: string;
                    /**
                     * 占比使用数据。
                     * @example `100`
                     */
                    Proportion: string;
                    /**
                     * 总数。
                     * @example `16`
                     */
                    Count: string;
                }[];
            };
        }[];
    };
}
