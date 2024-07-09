export interface ListMessageMetricsResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 分页返回的统计数据条目列表。
         */
        Metrics: {
            /**
             * 发送日期。
             * @example `20210321`
             */
            Date: string;
            /**
             * 发送失败。
             * @example `0`
             */
            Fail: number;
            /**
             * 发送中。
             * @example `0`
             */
            Pending: number;
            /**
             * 发送成功率。
             * @example `0.8`
             */
            Rate: number;
            /**
             * 发送成功。
             * @example `0`
             */
            Success: number;
            /**
             * 总计短信数量。
             * @example `0`
             */
            Total: number;
        }[];
        /**
         * 分页数，从1开始，默认为1。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，默认为10。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总统计数据条目数量。
         * @example `0`
         */
        TotalCount: number;
    };
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: number;
    /**
     * 错误信息。
     * @example `OK`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `f8651828-609d-4de8-ab49-ab781d7fd85a`
     */
    RequestId: string;
}
