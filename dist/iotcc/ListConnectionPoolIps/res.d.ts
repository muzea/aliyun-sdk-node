export interface ListConnectionPoolIpsResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 连接地址池IP总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 下一个查询开始的Token，为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 分页大小。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 连接地址池IP列表。
     */
    ConnectionPoolIps: {
        /**
         * 连接地址池ID。
         * @example `cp-bp11234abctmno0hdq****`
         */
        ConnectionPoolId: string;
        /**
         * 连接地址池中的IP地址。
         * @example `192.168.XX.XX`
         */
        Ip: string;
        /**
         * IP地址状态，仅取值**activated**，表示已激活，IP地址和云连接器绑定完成。
         * @example `activated`
         */
        Status: string;
    }[];
}
