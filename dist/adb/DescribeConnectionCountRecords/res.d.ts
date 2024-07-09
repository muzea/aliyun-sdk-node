export interface DescribeConnectionCountRecordsResponse {
    /**
     * 请求ID。
     * @example `562C7F89-FBE6-4A04-AAAA-7EBC25******`
     */
    RequestId: string;
    /**
     * 集群ID。
     * @example `am-bp1jj9xqft1po****`
     */
    DBClusterId: string;
    /**
     * 客户端IP信息。
     */
    AccessIpRecords: {
        /**
         * 客户端IP。
         * @example `42.120.XX.XX`
         */
        AccessIp: string;
        /**
         * 连接数。
         * @example `1`
         */
        Count: number;
    }[];
    /**
     * 用户信息列表。
     */
    UserRecords: {
        /**
         * 用户名。
         * @example `test`
         */
        User: string;
        /**
         * 连接数。
         * @example `1`
         */
        Count: number;
    }[];
}
