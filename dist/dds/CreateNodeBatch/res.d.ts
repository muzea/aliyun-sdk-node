export interface CreateNodeBatchResponse {
    /**
     * 请求ID。
     * @example `55D41A94-1ACE-55E8-8BC7-67D622E7****`
     */
    RequestId: string;
    /**
     * 订单ID。
     * @example `50179021707****`
     */
    OrderId: string;
    /**
     * 新增的Mongos节点或Shard节点ID。
     * @example `d-bp18f7d6b6a7****`
     */
    NodeId: string;
}
