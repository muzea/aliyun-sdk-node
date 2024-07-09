export interface ListCenInterRegionTrafficQosPoliciesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `113BFD47-63DF-5D9D-972C-033FB9C360CD`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 流量调度策略列表。
     */
    TrafficQosPolicies: {
        /**
         * 流量调度策略的名称。
         * @example `nametest`
         */
        TrafficQosPolicyName: string;
        /**
         * 流量调度策略的状态。
         * - **Creating**：创建中。
         * - **Active**：可用。
         * - **Modifying**：修改中。
         * - **Deleting**：删除中。
         * @example `Creating`
         */
        TrafficQosPolicyStatus: string;
        /**
         * 流量调度策略ID。
         * @example `qos-rnghap5gc8155x****`
         */
        TrafficQosPolicyId: string;
        /**
         * 流量调度策略的描述信息。
         * @example `desctest`
         */
        TrafficQosPolicyDescription: string;
        /**
         * 队列信息列表。
         */
        TrafficQosQueues: {
            /**
             * 队列的名称。
             * @example `namtest`
             */
            QosQueueName: string;
            /**
             * 当前队列占用的跨地域带宽的百分比。
             * @example `1`
             */
            RemainBandwidthPercent: number;
            /**
             * 队列ID。
             * @example `qos-queue-njcrmr9fiu1jii****`
             */
            QosQueueId: string;
            /**
             * 队列的描述信息。
             * @example `desctest`
             */
            QosQueueDescription: string;
            /**
             * 当前队列待匹配的流量报文的DSCP值。
             */
            Dscps: number[];
        }[];
        /**
         * 转发路由器实例ID。
         * @example `tr-2ze4ta4v32umj0rb***`
         */
        TransitRouterId: string;
        /**
         * 网络实例连接ID。
         * @example `tr-attach-q7ct7c06jpw***`
         */
        TransitRouterAttachmentId: string;
    }[];
}
