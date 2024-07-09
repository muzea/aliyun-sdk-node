export interface DescribeLiveDomainPublishErrorCodeResponse {
    /**
     * 查询数据的时间粒度，单位是秒。默认值为60。
     * @example `60`
     */
    DataInterval: string;
    /**
     * 推流域名。
     * @example `example.com,example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2016-06-29T09:10:00Z`
     */
    EndTime: string;
    /**
     * 每个时间间隔的错误码占比数据。
     */
    RealTimeCodeData: {
        /**
         * 各返回码占比使用数据列表。
         */
        CodeData: {
            /**
             * 响应码。响应码取值：
             * - 3：读数据超时 。
             * - 4：写数据错误 。
             * - 6：写数据超时 。
             * - 200：成功。
             * - 500：内部系统未知错误 。
             * - 501：推流异常。
             * - 502：信令耗时过长 。
             * - 401：推流参数异常 。
             * - 403：推流鉴权失败。
             * @example `200`
             */
            Code: string;
            /**
             * 响应数量。
             * @example `20`
             */
            Count: string;
            /**
             * 响应数量占比。
             * @example `66.04`
             */
            Proportion: string;
        }[];
        /**
         * 时间片起始时刻。
         * @example `2016-06-29T09:01:00Z`
         */
        TimeStamp: string;
    }[];
    /**
     * 请求ID。
     * @example `BC858082-736F-4A25-867B-E5B67C85ACF7`
     */
    RequestId: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2016-06-29T09:00:00Z`
     */
    StartTime: string;
}
