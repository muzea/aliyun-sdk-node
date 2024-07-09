export interface GetHealthStatusResponse {
    /**
     * 请求ID。
     * @example `64ADAB1E-0B7F-4FD8-A404-3BECC0E9CCFF`
     */
    RequestId: string;
    /**
     * 监听实例ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    ListenerId: string;
    /**
     * 监听下终端节点组和终端节点的健康状态。取值：
     * - **normal**：正常。
     * - **abnormal**：异常。
     * - **partiallyAbnormal**：部分异常。
     * @example `normal`
     */
    HealthStatus: string;
    /**
     * 终端节点组信息。
     */
    EndpointGroups: {
        /**
         * 终端节点组的ID。
         * @example `epg-bp14sz7ftcwwjgrdm****`
         */
        EndpointGroupId: string;
        /**
         * 终端节点组类型。取值：
         * - **default**：默认终端节点组。
         * - **virtual**：虚拟终端节点组。
         * @example `default`
         */
        EndpointGroupType: string;
        /**
         * 终端节点组的健康状态。取值：
         * - **init**：初始化
         * - **normal**：正常。
         * - **abnormal**：异常。
         * - **partiallyAbnormal**：部分异常。
         * @example `normal`
         */
        HealthStatus: string;
        /**
         * 转发策略ID列表。
         */
        ForwardingRuleIds: string[];
        /**
         * 终端节点信息。
         */
        Endpoints: {
            /**
             * 终端节点ID。
             * @example `ep-hp33b2e43fays7s8****`
             */
            EndpointId: string;
            /**
             * 终端节点地址。
             * @example `47.0.XX.XX`
             */
            Address: string;
            /**
             * 终端节点的健康状态。取值：
             * - **init**：初始化
             * - **normal**：正常。
             * - **abnormal**：异常。
             * @example `normal`
             */
            HealthStatus: string;
            /**
             * 终端节点的健康检查明细。
             * > 该参数暂未启用。
             * @example `无`
             */
            HealthDetail: string;
            /**
             * 终端节点的端口。
             * @example `80`
             */
            Port: number;
            /**
             * 终端节点类型。取值：
             * - **Domain**：自定义域名。
             * - **Ip**：自定义IP。
             * - **PublicIp**：阿里云公网IP。
             * - **ECS**：阿里云ECS实例。
             * - **SLB**：阿里云CLB实例（原SLB）。
             * - **ALB**：阿里云ALB实例。
             * - **OSS**：阿里云OSS实例。
             * - **ENI**：阿里云弹性网卡。
             * - **NLB**：阿里云NLB实例。
             * @example `Ip`
             */
            Type: string;
        }[];
    }[];
}
