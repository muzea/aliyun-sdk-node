export interface CreateDBNodesResponse {
    DBNodeIds: {
        /**
         * 创建的DBNodeId列表。
         */
        DBNodeId: string[];
    };
    /**
     * 请求ID。
     * @example `E053E730-5755-4AA9-AA9D-A47867******`
     */
    RequestId: string;
    /**
     * 数据库集群ID。
     * @example `pc-***************`
     */
    DBClusterId: string;
    /**
     * 订单ID。
     * @example `2148126708*****`
     */
    OrderId: string;
}
