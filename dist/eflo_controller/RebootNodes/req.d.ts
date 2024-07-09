export interface RebootNodesRequest {
    /**
     * 集群id
     * @example `i15b480fbd2fcdbc2869cd80`
     */
    "ClusterId"?: string;
    /**
     * 节点列表
     */
    "Nodes"?: string[];
    /**
     * 是否允许跳过失败节点，默认值为False
     * @example `False`
     */
    "IgnoreFailedNodeTasks"?: boolean;
}
