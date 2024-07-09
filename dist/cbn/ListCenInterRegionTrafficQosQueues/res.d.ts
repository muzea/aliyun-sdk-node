export interface ListCenInterRegionTrafficQosQueuesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `0151fa6aa1ed****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `1D1E15D2-416D-54F3-BDD9-BC27DE4C6352`
     */
    RequestId: string;
    /**
     * 流量调度策略包含的队列信息。
     */
    TrafficQosQueues: {
        /**
         * 跨地域连接ID。
         * @example `tr-attach-nzrcv25d7ezt23****`
         */
        TransitRouterAttachmentId: string;
        /**
         * 转发路由器实例ID。
         * @example `tr-p0wwagjv6fvxt4b7y****`
         */
        TransitRouterId: string;
        /**
         * 流量调度策略队列名称。
         * @example `qosQueueName`
         */
        TrafficQosQueueName: string;
        /**
         * 当前队列可使用的跨地域带宽的百分比。
         * 例如，**1**表示符合当前队列的流量报文最多只能使用1%的跨地域带宽。
         * @example `1`
         */
        RemainBandwidthPercent: number;
        /**
         * 流量调度策略ID。
         * @example `qos-fv2qq9yqrsjowp****`
         */
        TrafficQosPolicyId: string;
        /**
         * 流量调度策略队列ID。
         * @example `qos-queue-siakjb2nn9gz5z****
        `
         */
        TrafficQosQueueId: string;
        /**
         * 流量调度策略队列描述。
         * @example `qosQueueDescription
        `
         */
        TrafficQosQueueDescription: string;
        /**
         * 当前队列匹配的DSCP值。
         */
        Dscps: number[];
        /**
         * 队列的状态。
         * - **Creating**：创建中。
         * - **Active**：运行中。
         * - **Deleting**：删除中。
         * @example `Active`
         */
        Status: string;
    }[];
}
