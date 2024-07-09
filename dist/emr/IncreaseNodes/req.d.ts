export interface IncreaseNodesRequest {
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 节点组ID。扩容的目标节点组。
     * @example `ng-869471354ecd****`
     */
    "NodeGroupId": string;
    /**
     * 节点数量。本次扩容的增量节点数量。取值范围：1~500。
     * @example `3`
     */
    "IncreaseNodeCount": number;
    /**
     * 是否自动支付本次扩容操作涉及的订单。节点组付费类型PaymentType取值Subscription时该参数生效。取值范围：
     * - true：自动支付本次操作涉及的订单。
     * - false：不自动支付本次操作涉及的订单。
     * 默认值：false。
     * @example `false`
     */
    "AutoPayOrder"?: boolean;
    "AutoRenew"?: boolean;
    /**
     * 付费时长。当PaymentDurationUnit取值为Month时，取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
     * @example `12`
     */
    "PaymentDuration"?: number;
    /**
     * 付费时长单位。取值范围：
     * - Month：月。
     * @example `Month`
     */
    "PaymentDurationUnit"?: string;
    /**
     * 应用配置。数组元素个数N的取值范围：1~1000。
     * @example `Month`
     */
    "ApplicationConfigs"?: any[];
    /**
     * 本次扩容接受的最小节点数量。取值范围为 1 到 500。
     * - 若设置了该值，当ECS库存数量小于IncreaseNodeCount 时，扩容流程将尽力创建 `MinIncreaseNodeCount` 个节点，扩容流程状态将显示为部分成功 `PARTIAL_COMPLETED`。
     * - 如果不设置该值，当ECS库存数量小于IncreaseNodeCount 时，扩容流程失败，状态为失败 `FAILED`。
     */
    "MinIncreaseNodeCount"?: number;
}
