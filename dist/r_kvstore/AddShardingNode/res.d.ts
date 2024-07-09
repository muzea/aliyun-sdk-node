export interface AddShardingNodeResponse {
    /**
     * 请求ID。
     * @example `B79C1A90-495B-4E99-A2AA-A4DB13B8****`
     */
    RequestId: string;
    /**
     * 订单ID。
     * @example `20741011111111`
     */
    OrderId: number;
    /**
     * 数据分片节点ID列表。
     */
    NodeIds: string[];
}
