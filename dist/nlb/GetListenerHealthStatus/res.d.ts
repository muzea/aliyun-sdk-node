export interface GetListenerHealthStatusResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 监听的服务器组健康检查状态列表。
     */
    ListenerHealthStatus: {
        /**
         * 网络型负载均衡实例的监听ID。
         * @example `lsn-agkd9gmjx8nd85jjs0****`
         */
        ListenerId: string;
        /**
         * 监听的端口号。
         * @example `80`
         */
        ListenerPort: number;
        /**
         * 监听协议。取值：**TCP**、**UDP**或**TCPSSL**。
         * @example `TCPSSL`
         */
        ListenerProtocol: string;
        /**
         * 服务器组信息。
         */
        ServerGroupInfos: {
            /**
             * 是否开启健康检查。取值：
             * - **true**：开启。
             * - **false**：关闭。
             * @example `true`
             */
            HeathCheckEnabled: boolean;
            /**
             * 服务器组ID。
             * @example `sgp-ppdpc14gdm3x4o****`
             */
            ServerGroupId: string;
            /**
             * 非正常状态的后端服务器列表。
             */
            NonNormalServers: {
                /**
                 * 健康检查状态。取值：
                 * - **Initial**：初始化中，表示负载均衡实例配置了健康检查，但查不到数据。
                 * - **Unhealthy**：异常，表示连续上报不健康的状态。
                 * - **Unused**：未使用，表示后端服务器的权重为0。
                 * - **Unavailable**：未开启，表示未开启健康检查。
                 * @example `Initial`
                 */
                Status: string;
                /**
                 * 后端服务器端口。
                 * @example `80`
                 */
                Port: number;
                /**
                 * 非正常状态的原因。
                 */
                Reason: {
                    /**
                     * **Status**为异常状态时的详细原因。取值：
                     * - **CONNECT_TIMEOUT**：负载均衡健康检查时向后端服务器建立连接超时。
                     * - **CONNECT_FAIL**：负载均衡健康检查时向后端服务器建立连接失败。
                     * - **RECV_TIMEOUT**：负载均衡健康检查时从后端服务器接收响应超时。
                     * - **CONNECT_INTERRUPT**：负载均衡健康检查与后端服务器连接中断。
                     * - **HTTP_CODE_NOT_MATCH**：负载均衡健康HTTP检查时从后端服务器接收的响应码与预期配置返回码不一致。
                     * - **HTTP_INVALID_HEADER**：负载均衡健康HTTP检查时从后端服务器接收响应格式错误。
                     * @example `CONNECT_TIMEOUT`
                     */
                    ReasonCode: string;
                };
                /**
                 * 后端服务器ID。
                 * @example `i-bp1bt75jaujl7tjl****`
                 */
                ServerId: string;
                /**
                 * 后端服务器IP。
                 * @example `192.168.8.10`
                 */
                ServerIp: string;
            }[];
        }[];
    }[];
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
}
