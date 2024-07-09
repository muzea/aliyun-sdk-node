export interface DescribePortConnsListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6D48AED0-41DB-5D9B-B484-3B6AAD312AD1`
     */
    RequestId: string;
    /**
     * 端口连接数据列表。
     */
    ConnsList: {
        /**
         * 活跃连接数。
         * @example `3`
         */
        ActConns: number;
        /**
         * 不活跃连接数。
         * @example `2`
         */
        InActConns: number;
        /**
         * 返回数据的索引。
         * @example `16506`
         */
        Index: number;
        /**
         * 新建连接数。
         * @example `0`
         */
        Cps: number;
        /**
         * > 该参数在内部测试中，暂时请勿使用。
         * @example `8`
         */
        Conns: number;
    }[];
}
