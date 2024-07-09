export interface ListConnectionPoolsResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 连接地址池总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 下一个查询开始的Token，为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数量。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 连接地址池信息。
     */
    ConnectionPools: {
        /**
         * 连接地址池ID。
         * @example `cp-bp11234abctmno0hdq****`
         */
        ConnectionPoolId: string;
        /**
         * 连接地址池的状态。取值：
         * - **Creating**：创建中。
         * - **Running**：运行中。
         * - **Deleting**：删除中。
         * - **Deleted**：已删除。
         * - **Associating**：IP绑定中。
         * - **Dissociating**：IP解绑中。
         * @example `Running`
         */
        ConnectionPoolStatus: string;
        /**
         * 连接地址池的名称。
         * @example `pool01`
         */
        ConnectionPoolName: string;
        /**
         * 连接地址池的描述信息。
         * @example `pool01`
         */
        ConnectionPoolDescription: string;
        /**
         * 连接地址池所属的CIDR地址块。
         */
        Cidrs: string[];
        /**
         * 上一次绑定解绑调用返回的**RequestId**。可以根据此ID调用**GetConnectionPoolIpOperationResult**返回绑定解绑的失败原因。
         * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA651`
         */
        OperateResultRequestID: string;
    }[];
}
