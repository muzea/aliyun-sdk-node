export interface ListTLSCipherPoliciesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 本次请求条件下的TLS策略总数。
     * @example `1000`
     */
    TotalCount: number;
    /**
     * 是否结束。取值：
     * - **true**：表示当前页是最后一页。
     * - **false**：表示还有下一页。
     * @example `false`
     */
    IsTruncated: boolean;
    /**
     * TLS策略列表。
     */
    TLSCipherPolicies: {
        /**
         * TLS策略实例状态。取值：
         * - **configuring**：配置中。
         * - **normal**： 正常。
         * @example `normal`
         */
        Status: string;
        /**
         * TLS策略实例ID。
         * @example `tls-bp17elso1h323r****`
         */
        InstanceId: string;
        /**
         * TLS策略名称。
         * @example `TLSPolicy-test****`
         */
        Name: string;
        /**
         * 创建时间的时间戳。
         * @example `1608273800000`
         */
        CreateTime: number;
        /**
         * 关联的监听。
         */
        RelateListeners: {
            /**
             * 监听端口。取值：**1**~**65535**。
             * @example `80`
             */
            Port: number;
            /**
             * 监听协议。取值：
             * - **TCP**
             * - **UDP**
             * - **HTTP**
             * - **HTTPS**
             * @example `HTTPS`
             */
            Protocol: string;
            /**
             * 负载均衡实例ID。
             * @example `lb-bp1b6c719dfa08ex****`
             */
            LoadBalancerId: string;
        }[];
        TLSVersions: string[];
        Ciphers: string[];
    }[];
}
