export interface CreateCenInterRegionTrafficQosPolicyRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `123e4567-e89b-12d3-a456-426655****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建流量调度策略。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接创建流量调度策略。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 转发路由器实例ID。
     * @example `tr-8vbuqeo5h5pu3m01d****`
     */
    "TransitRouterId": string;
    /**
     * 跨地域连接ID。
     * @example `tr-attach-r6g0m3epjehw57****`
     */
    "TransitRouterAttachmentId": string;
    /**
     * 流量调度策略的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `nametest`
     */
    "TrafficQosPolicyName"?: string;
    /**
     * 流量调度策略的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `desctest`
     */
    "TrafficQosPolicyDescription"?: string;
    /**
     * 流量调度策略包含的队列信息。
     * 最多支持创建3个队列，更多队列需要用CreateCenInterRegionTrafficQosQueue 创建。
     */
    "TrafficQosQueues"?: {
        /**
         * 当前队列的名称。
         * 一个流量调度策略最多支持创建3个队列，每个队列可以被指定一个队列名称。
         * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
         * @example `nametest`
         */
        QosQueueName: string;
        /**
         * 当前队列可使用的跨地域带宽的百分比。
         * 一个流量调度策略最多支持创建3个队列，每个队列可以被指定允许使用的跨地域带宽百分比。
         * 例如，您输入**1**，则表示符合当前队列的流量报文最多只能使用1%的跨地域带宽。
         * > 一个流量调度策略下，所有队列的跨地域带宽百分比之和不能超过100%。
         * @example `1`
         */
        RemainBandwidthPercent: string;
        /**
         * 当前队列匹配的DSCP值。
         * 一个流量调度策略最多支持创建3个队列，每个队列最多支持匹配60个DSCP值，DSCP值之间使用半角逗号（,）分隔。
         */
        Dscps: number[];
        /**
         * 当前队列的描述信息。
         * 一个流量调度策略最多支持创建3个队列，每个队列可以被添加一个队列描述信息。
         * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
         * @example `desctest`
         */
        QosQueueDescription: string;
    }[];
}
