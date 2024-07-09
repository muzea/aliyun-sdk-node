export interface ScaleClusterNodePoolRequest {
    /**
     * 集群ID。
     * @example `c23421cfa74454bc8b37163fd19af****`
     */
    "ClusterId": string;
    /**
     * 节点池ID。
     * @example `np31da1b38983f4511b490fc62108a****`
     */
    "NodepoolId": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 扩容节点数量。受当前集群节点配额限制，单次操作最多扩容500个节点。
         * @example `1`
         */
        count: number;
    };
}
