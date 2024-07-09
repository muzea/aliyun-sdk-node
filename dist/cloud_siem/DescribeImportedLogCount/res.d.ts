export interface DescribeImportedLogCountResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 日志总数。
         * @example `59`
         */
        TotalLogCount: number;
        /**
         * 已接入的日志的数量。
         * @example `10`
         */
        ImportedLogCount: number;
        /**
         * 未接入的日志的数量。
         * @example `49`
         */
        UnImportedLogCount: number;
    };
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
