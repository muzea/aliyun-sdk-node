export interface ListSecurityPolicyRelationsResponse {
    /**
     * 请求ID。
     * @example `593B0448-D13E-4C56-AC0D-FDF******`
     */
    RequestId: string;
    /**
     * 安全策略与监听的关联关系列表。
     */
    SecrityPolicyRelations: {
        /**
         * 关联的监听列表。
         */
        RelatedListeners: {
            /**
             * 监听ID。
             * @example `lsn-0bfuc****`
             */
            ListenerId: string;
            /**
             * 监听端口。
             * @example `80`
             */
            ListenerPort: number;
            /**
             * 监听协议。
             * @example `HTTPS`
             */
            ListenerProtocol: string;
            /**
             * 应用型负载均衡实例ID。
             * @example `alb-umwzbz6******`
             */
            LoadBalancerId: string;
        }[];
        /**
         * 安全策略实例ID。
         * @example `sp-bp1bpn0kn9****`
         */
        SecurityPolicyId: string;
    }[];
}
