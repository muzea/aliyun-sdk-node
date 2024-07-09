export interface CountGatewayTupleOrdersRequest {
    /**
     * 工单状态过滤列表。若不使用此参数，则表示统计所有状态的工单。
     * 参考工单状态取值
     * @example `APPLYING`
     */
    "States"?: string[];
}
