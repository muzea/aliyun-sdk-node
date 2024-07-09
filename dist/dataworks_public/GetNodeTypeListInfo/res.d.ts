export interface GetNodeTypeListInfoResponse {
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 符合条件的节点类型信息列表。
     */
    NodeTypeInfoList: {
        /**
         * 当前数据页的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 当前数据页的大小。
         * @example `50`
         */
        PageSize: number;
        /**
         * 满足查询条件的数据总条数。
         * @example `127`
         */
        TotalCount: number;
        /**
         * 单个节点类型的信息。
         */
        NodeTypeInfo: {
            /**
             * 节点类型的名称。
             * @example `ODPS SQL`
             */
            NodeTypeName: string;
            /**
             * 节点类型Type（数字）。
             * @example `10`
             */
            NodeType: number;
        }[];
    };
}
