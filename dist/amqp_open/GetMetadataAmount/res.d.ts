export interface GetMetadataAmountResponse {
    /**
     * 请求ID。
     * @example `B75ACF23-2BEB-44AC-A0B6-AE14EDCA***`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 可创建的Vhost的最大数量。
         * @example `10`
         */
        MaxVirtualHosts: number;
        /**
         * 已创建的Vhost的数量。
         * @example `1`
         */
        CurrentVirtualHosts: number;
        /**
         * 可创建的Queue的最大数量。
         * @example `20`
         */
        MaxQueues: number;
        /**
         * 已创建的Exchange的数量。
         * @example `7`
         */
        CurrentExchanges: number;
        /**
         * 可创建的Exchange的最大数量。
         * @example `20`
         */
        MaxExchanges: number;
        /**
         * 已创建的Queue的数量。
         * @example `1`
         */
        CurrentQueues: number;
    };
}
