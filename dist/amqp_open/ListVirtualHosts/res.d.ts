export interface ListVirtualHostsResponse {
    /**
     * 请求ID。
     * @example `EF4DB019-DA4A-4CE3-B220-223BBC93F***`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 最大结果集。
         * @example `2`
         */
        MaxResults: number;
        /**
         * 表示当前调用返回读取到的位置，空代表数据已经读取完毕。
         * @example `caebacccb2be03f84eb48b699f0a****`
         */
        NextToken: string;
        /**
         * Vhost列表。
         */
        VirtualHosts: {
            /**
             * Vhost名称。
             * @example `test`
             */
            Name: string;
        }[];
    };
}
