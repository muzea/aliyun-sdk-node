export interface TempModifyDBNodeResponse {
    /**
     * 节点列表。
     */
    DBNodeIds: string[];
    /**
     * 请求ID。
     * @example `69A85BAF-1089-4CDF-A82F-0A140F******`
     */
    RequestId: string;
    /**
     * 集群ID。
     * @example `pc-xxxxxxxxxxxxxxxxx`
     */
    DBClusterId: string;
    /**
     * 订单ID。
     * @example `2035638*******`
     */
    OrderId: string;
}
