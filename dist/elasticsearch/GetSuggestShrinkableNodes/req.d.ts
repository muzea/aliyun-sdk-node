export interface GetSuggestShrinkableNodesRequest {
    /**
     * 实例ID。
     * @example `es-cn-nif1q9o8r0008****`
     */
    "InstanceId": string;
    /**
     * 需要缩容的节点类型。**WORKER**表示热节点，**WORKER_WARM**表示冷节点。
     * @example `WORKER`
     */
    "nodeType": string;
    /**
     * 期望获取可缩容节点的数量。
     * @example `1`
     */
    "count": number;
    /**
     * 是否忽略实例状态，默认为false。
     * @example `false`
     */
    "ignoreStatus"?: boolean;
}
