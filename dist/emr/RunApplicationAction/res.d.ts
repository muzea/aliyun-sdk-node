export interface RunApplicationActionResponse {
    /**
     * 操作ID。
     * @example `op-13c37a77c505****`
     */
    OperationId: string;
    /**
     * 异常节点列表。
     */
    AbnInstances: {
        /**
         * 异常节点名称。
         * @example `core1-1`
         */
        NodeName: string;
        /**
         * 异常节点ID。
         * @example `i-bp1cudc25w2bfwl5****`
         */
        NodeId: string;
    }[];
    /**
     * 请求ID。
     * @example `9E3A7161-EB7B-172B-8D18-FFB06BA3****`
     */
    RequestId: string;
}
