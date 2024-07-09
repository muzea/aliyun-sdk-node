export interface DescribeDBClusterNodeResponse {
    /**
     * 节点列表。
     */
    Nodes: {
        /**
         * 节点名称。
         * @example `master-10*******`
         */
        Name: string;
    }[];
    /**
     * 请求ID。
     * @example `87E44B48-B306-4AD3-A63B-C8**********`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `gp-bp***************`
     */
    DBClusterId: string;
}
