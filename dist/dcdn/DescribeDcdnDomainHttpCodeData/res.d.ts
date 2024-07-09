export interface DescribeDcdnDomainHttpCodeDataResponse {
    /**
     * 结束时间。
     * @example `2018-03-01T13:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2019-03-01T00:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `91FC2D9D-B042-4634-8A5C-7B8E7482C22D`
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
    DataPerInterval: {
        /**
         * 每个时间间隔的HTTP返回码占比数据。
         */
        DataModule: {
            /**
             * 时间片起始时刻。
             * @example `2019-03-01T13:00:00Z`
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
                    Code: number;
                    /**
                     * 占比使用数据。
                     * @example `33.333333`
                     */
                    Proportion: number;
                    /**
                     * 总数。
                     * @example `1`
                     */
                    Count: number;
                }[];
            };
        }[];
    };
}
