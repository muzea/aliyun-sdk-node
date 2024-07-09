export interface RemoveNodePoolNodesRequest {
    /**
     * 集群ID。
     * @example `c23421cfa74454bc8b37163fd19af****`
     */
    "ClusterId": string;
    /**
     * 节点池ID。
     * @example `np97de2cfb1ba042398dd8f5504c94****`
     */
    "NodepoolId": string;
    /**
     * 是否释放节点。可选值：
     * - true：释放。
     * - false：不释放。
     * @example `true`
     */
    "release_node"?: boolean;
    /**
     * 是否排水节点。可选值：
     * - true：排水。
     * - false：不排水。
     * @example `true`
     */
    "drain_node"?: boolean;
    /**
     * 移除节点列表。
     */
    "nodes"?: string[];
    /**
     * 移除实例列表。
     */
    "instance_ids"?: string[];
    /**
     * 是否并发移除。
     * @example `false`
     */
    "concurrency"?: boolean;
}
