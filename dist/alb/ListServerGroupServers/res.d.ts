export interface ListServerGroupServersResponse {
    /**
     * 本次请求所返回的最大记录条数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `caeba0bbb2be03f8****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF*****`
     */
    RequestId: string;
    /**
     * 服务器列表。
     */
    Servers: {
        /**
         * 后端服务器描述。
         * @example `test`
         */
        Description: string;
        /**
         * 后端服务器使用的端口。取值范围：**1**~**65535**。
         * @example `80`
         */
        Port: number;
        /**
         * 后端服务器ID。
         * >当**ServerType**为**Fc**时，**ServerId**为函数计算的ARN标识。
         * @example `i-bp1f9kdprbgy9uiu****`
         */
        ServerId: string;
        /**
         * 指定的IP地址。
         * @example `192.168.XX.XX`
         */
        ServerIp: string;
        /**
         * 后端服务器类型。
         * @example `Ecs`
         */
        ServerType: string;
        /**
         * 后端服务器的添加状态。取值：
         * - **Adding**：添加中。
         * - **Available**：正常可用状态。
         * - **Configuring**：配置中。
         * - **Removing**：移除中。
         * @example `Available`
         */
        Status: string;
        /**
         * 后端服务器的权重。权重越高的服务器将被分配到更多的访问请求。
         * @example `100`
         */
        Weight: number;
        /**
         * 服务器组ID。
         * @example `sgp-qy042e1jabmprh****`
         */
        ServerGroupId: string;
        /**
         * 是否开启远端IP。取值：
         *
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        RemoteIpEnabled: boolean;
    }[];
    /**
     * 本次请求条件下的数据总量。
     * @example `3`
     */
    TotalCount: number;
}
