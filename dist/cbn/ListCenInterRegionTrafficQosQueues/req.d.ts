export interface ListCenInterRegionTrafficQosQueuesRequest {
    /**
     * 转发路由器实例ID。
     * @example `tr-bp1rmwxnk221e3fas****`
     */
    "TransitRouterId"?: string;
    /**
     * 跨地域连接ID。
     * @example `tr-attach-a6p8voaodog5c0****`
     */
    "TransitRouterAttachmentId"?: string;
    /**
     * 流量调度策略ID。
     * @example `qos-rnghap5gc8155x****`
     */
    "TrafficQosPolicyId"?: string;
    /**
     * 流量调度策略队列ID。
     * @example `qos-queue-siakjb2nn9gz5z****`
     */
    "TrafficQosQueueId"?: string;
    /**
     * 流量调度策略队列名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `qosQueueName`
     */
    "TrafficQosQueueName"?: string;
    /**
     * 流量调度策略队列描述。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `qosQueueDescription`
     */
    "TrafficQosQueueDescription"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：1~100。默认值：20。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `2ca1ed1573cb****`
     */
    "NextToken"?: string;
}
