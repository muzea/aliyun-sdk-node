export interface CreateDBNodesResponse {
    /**
     * 请求ID。
     * @example `7A41C147-C8D0-4DAE-A1A2-17EBCD60DFA1`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `rm-2ze450g4ctg6t****`
     */
    DBInstanceId: string;
    /**
     * 订单ID。
     * @example `2133400000****`
     */
    OrderId: number;
    /**
     * 创建的节点ID。取值类型为String，多个节点以`,`分隔。
     * @example `rn-abcd2****`
     */
    NodeIds: string;
}
