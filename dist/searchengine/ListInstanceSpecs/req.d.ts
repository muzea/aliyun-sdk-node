export interface ListInstanceSpecsRequest {
    /**
     * 实例ID。
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 节点类型。取值：
     * - qrs：查询节点。
     * - search：数据节点。
     * - index：索引节点。
     * - cluster：集群。
     * @example `search`
     */
    "type": string;
}
