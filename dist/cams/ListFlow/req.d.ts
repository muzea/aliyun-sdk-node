export interface ListFlowRequest {
    /**
     * 查询的指定Flow名称。参数为空则查询所有Flow信息。
     * @example `flow-02020`
     */
    "FlowName"?: string;
    /**
     * 分页对象。
     */
    "Page"?: {
        /**
         * 数量。
         * @example `20`
         */
        Size: number;
        /**
         * 页数。
         * @example `1`
         */
        Index: number;
    };
    /**
     * ISV子客户的SpaceId/实例ID。
     * @example `9994****`
     */
    "CustSpaceId"?: string;
}
