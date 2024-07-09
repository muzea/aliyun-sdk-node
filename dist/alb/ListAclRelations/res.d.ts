export interface ListAclRelationsResponse {
    /**
     * ACL与监听关系列表
     */
    AclRelations: {
        /**
         * ACL ID
         * @example `acl-hp34s2h0xx1ht4nwo****`
         */
        AclId: string;
        /**
         * 关联的监听列表
         */
        RelatedListeners: {
            /**
             * 监听ID
             * @example `lsn-bpn0kn908w4nbw****`
             */
            ListenerId: string;
            /**
             * 监听端口
             * @example `80`
             */
            ListenerPort: number;
            /**
             * 监听协议
             * @example `HTTPS`
             */
            ListenerProtocol: string;
            /**
             * 负载均衡实例ID
             * @example `alb-bp1b6c719dfa08ex****`
             */
            LoadBalancerId: string;
            /**
             * ACL与监听关联的状态：
             * - **Associating**：关联中
             * - **Associated**：已关联
             * - **Dissociating**：解除关联中
             * @example `Associated`
             */
            Status: string;
        }[];
    }[];
    /**
     * 请求ID
     * @example `593B0448-D13E-4C56-AC0D-FDF0******`
     */
    RequestId: string;
}
