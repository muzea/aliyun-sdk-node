export interface ListConnectionPoolAllIpsResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 总列表条目数。
     * @example `1`
     */
    TotalIpsCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
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
         * @example `192.168.0.1`
         */
        Ip: string;
        /**
         * IP地址状态，仅返回**activated**，表示已激活，IP地址和云连接器绑定完成。
         * @example `activated`
         */
        Status: string;
        /**
         * 连接地址池中IP地址类型。取值：
         * - **Cidr**：连接地址池所属的CIDR地址块。
         * - **Host**：物联网卡的IP地址。
         * @example `Cidr`
         */
        Type: string;
        /**
         * 可用IP数量。
         * - **Type**取值为**Host**时，可用IP数量为**1**。
         * - **Type**取值为**Cidr**时，可用IP数量为CIDR地址块的IP总数。
         * @example `254`
         */
        IpNum: number;
    }[];
}
