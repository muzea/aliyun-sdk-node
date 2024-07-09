export interface ShrinkClusterRequest {
    /**
     * 集群id
     * @example `i15dfa12e8f27c44f4a006c2c8bb`
     */
    "ClusterId"?: string;
    /**
     * 节点组信息
     */
    "NodeGroups"?: {
        /**
         * 节点组id
         * @example `ng-3b6fbd24b1b845a0`
         */
        NodeGroupId: string;
        /**
         * 节点列表
         */
        Nodes: {
            /**
             * 节点id
             * @example `e01poc-cn-zmb2ypjdc01`
             */
            NodeId: string;
        }[];
    }[];
    /**
     * 是否允许跳过失败节点，默认值为False
     * @example `False`
     */
    "IgnoreFailedNodeTasks"?: boolean;
}
