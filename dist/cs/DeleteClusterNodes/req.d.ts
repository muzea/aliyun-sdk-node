export interface DeleteClusterNodesRequest {
    /**
     * 集群ID。
     * @example `c850429a2287b4d968e27e87a4921****`
     */
    "ClusterId": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 是否自动排空节点上的Pod。取值：
         * - `true`：自动排空节点上的Pod。
         * - `false`：不自动排空节点上的Pod。
         * 默认值：`false`。
         * @example `true`
         */
        drain_node: boolean;
        /**
         * 是否同时移除ECS。取值：
         * - `true`：同时移除ECS。
         * - `false`：不同移除ECS。
         * 默认值：`false`。
         * > 当节点为包年包月实例时，不支持同时移除ECS。
         * @example `true`
         */
        release_node: boolean;
        /**
         * 移除节点列表，节点名称必须是节点在集群中的名称，例如：`cn-hangzhou.192.168.0.70`。
         */
        nodes: string[];
    };
}
