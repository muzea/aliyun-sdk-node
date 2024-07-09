export interface GetListenerHealthStatusResponse {
    /**
     * 监听的服务器组健康检查状态列表。
     */
    ListenerHealthStatus: {
        /**
         * 实例的监听ID。
         * @example `lsn-o4u54y73wq7b******`
         */
        ListenerId: string;
        /**
         * 监听的端口号。
         * @example `80`
         */
        ListenerPort: number;
        /**
         * 监听的协议。
         * @example `http`
         */
        ListenerProtocol: string;
        /**
         * 服务器组信息。
         */
        ServerGroupInfos: {
            /**
             * 健康检查开启状态。取值： **on**，表示开启健康检查。
             * @example `on`
             */
            HealthCheckEnabled: string;
            /**
             * 非正常状态的后端服务器列表。
             */
            NonNormalServers: {
                /**
                 * 后端服务器端口。
                 * @example `90`
                 */
                Port: number;
                /**
                 * 非正常状态的原因。
                 */
                Reason: {
                    /**
                     * 后端服务器实际的返回码信息，例如，**302**。
                     * > `ReasonCode`为**RESPONSE_MISMATCH**才该返回值。
                     * @example `302`
                     */
                    ActualResponse: string;
                    /**
                     * 用户预期的后端服务器返回码信息。
                     * 取值：**HTTP\_2xx**、**HTTP\_3xx**、**HTTP\_4xx**和**HTTP\_5xx**。多个返回码之间用半角逗号（,）分隔。
                     * > **ReasonCode**为**RESPONSE_MISMATCH**才返回该值。
                     * @example `HTTP_2xx`
                     */
                    ExpectedResponse: string;
                    /**
                     * **Status**为异常状态时的详细原因，目前仅HTTP和HTTPS的监听与转发规则支持查看异常状态原因：
                     * - **CONNECT_TIMEOUT**：负载均衡健康检查时向后端服务器建立连接超时。
                     * - **CONNECT_FAILED**：负载均衡健康检查时向后端服务器建立连接失败。
                     * - **RECV_RESPONSE_FAILED**：负载均衡健康检查时从后端服务器接收响应失败。
                     * - **RECV_RESPONSE_TIMEOUT**：负载均衡健康检查时从后端服务器接收响应超时。
                     * - **SEND_REQUEST_FAILED**：负载均衡健康检查时向后端服务器发送请求失败。
                     * - **SEND_REQUEST_TIMEOUT**：负载均衡健康检查时向后端服务器发送请求超时。
                     * - **RESPONSE_FORMAT_ERROR**：负载均衡健康检查时从后端服务器接收响应格式错误。
                     * - **RESPONSE_MISMATCH**：负载均衡健康检查时从后端服务器接收的响应码与预期配置返回码不一致。
                     * @example `RESPONSE_MISMATCH`
                     */
                    ReasonCode: string;
                };
                /**
                 * 后端服务器ID。
                 * @example `i-uf62h8v******`
                 */
                ServerId: string;
                /**
                 * 后端服务器IP。
                 * @example `192.168.8.10`
                 */
                ServerIp: string;
                /**
                 * 健康检查状态。取值：
                 * - **Initial**：初始化中，表示负载均衡实例配置了健康检查，但查不到数据。
                 * - **Unhealthy**：异常，表示连续上报不健康的状态。
                 * - **Unused**：未使用，表示后端服务器的权重为0。
                 * - **Unavailable**：未开启，表示未开启健康检查。
                 * @example `Initial`
                 */
                Status: string;
            }[];
            /**
             * 关联的服务器组ID。
             * @example `sgp-8ilqs4axp6******`
             */
            ServerGroupId: string;
            /**
             * 服务器组使用类型。
             * @example `TrafficMirror`
             */
            ActionType: string;
        }[];
    }[];
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876F******`
     */
    RequestId: string;
    /**
     * 转发规则的健康状态列表。
     */
    RuleHealthStatus: {
        /**
         * 转发规则ID。
         * @example `rule-hp34s2h0xx1ht4nwo****`
         */
        RuleId: string;
        /**
         * 服务器组列表。
         */
        ServerGroupInfos: {
            /**
             * 健康检查开启状态。取值： **on**，表示开启健康检查。
             * @example `on`
             */
            HealthCheckEnabled: string;
            /**
             * 非正常状态的后端服务器列表。
             */
            NonNormalServers: {
                /**
                 * 后端服务器端口。
                 * @example `90`
                 */
                Port: number;
                /**
                 * 非正常状态的原因。
                 */
                Reason: {
                    /**
                     * 后端服务器实际的返回码信息，例如，**302**。
                     * > **ReasonCode**为**RESPONSE_MISMATCH**才有值。
                     * @example `302`
                     */
                    ActualResponse: string;
                    /**
                     * 用户预期的后端服务器返回码信息。
                     * 取值：**HTTP\_2xx**、**HTTP\_3xx**、**HTTP\_4xx**和**HTTP\_5xx**。多个返回码之间用半角逗号（,）分隔。
                     * > **ReasonCode**为**RESPONSE_MISMATCH**才有值。
                     * @example `HTTP_2xx`
                     */
                    ExpectedResponse: string;
                    /**
                     * **Status**为异常状态时的详细原因，目前仅HTTP和HTTPS的监听与转发规则支持查看异常状态原因：
                     * - **CONNECT_TIMEOUT**：负载均衡健康检查时向后端服务器建立连接超时。
                     * - **CONNECT_FAILED**：负载均衡健康检查时向后端服务器建立连接失败。
                     * - **RECV_RESPONSE_FAILED**：负载均衡健康检查时从后端服务器接收响应失败。
                     * - **RECV_RESPONSE_TIMEOUT**：负载均衡健康检查时从后端服务器接收响应超时。
                     * - **SEND_REQUEST_FAILED**：负载均衡健康检查时向后端服务器发送请求失败。
                     * - **SEND_REQUEST_TIMEOUT**：负载均衡健康检查时向后端服务器发送请求超时。
                     * - **RESPONSE_FORMAT_ERROR**：负载均衡健康检查时从后端服务器接收响应格式错误。
                     * - **RESPONSE_MISMATCH**：负载均衡健康检查时从后端服务器接收的响应码与预期配置返回码不一致。
                     * @example `RESPONSE_MISMATCH`
                     */
                    ReasonCode: string;
                };
                /**
                 * 后端服务器ID。
                 * @example `i-uf62h8v******`
                 */
                ServerId: string;
                /**
                 * 后端服务器组IP。
                 * @example `192.168.2.11`
                 */
                ServerIp: string;
                /**
                 * 健康检查状态。取值：
                 * - **Initial**：初始化中，表示负载均衡实例配置了健康检查，但查不到数据。
                 * - **Unhealthy**：异常，表示连续上报不健康的状态。
                 * - **Unused**：未使用，表示后端服务器的权重为0。
                 * - **Unavailable**：未开启，表示未开启健康检查。
                 * @example `Initial`
                 */
                Status: string;
            }[];
            /**
             * 关联的服务器组ID。
             * @example `sgp-8ilqs4axp6******`
             */
            ServerGroupId: string;
            /**
             * 服务器组使用类型。
             * @example `TrafficMirror`
             */
            ActionType: string;
        }[];
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
}
