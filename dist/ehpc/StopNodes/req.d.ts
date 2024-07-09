export interface StopNodesRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 节点角色。取值范围：
     * - Manager：管控节点
     * - Login：登录节点
     * - Compute：计算节点
     * 默认值：Compute
     * @example `Compute`
     */
    "Role"?: string;
    /**
     * 要停止的节点信息。
     */
    "Instance": {
        /**
         * 第N个要停止的节点ID。N的取值范围：1~100
         * 您可以通过调用[ListNodes](~~87161~~)获取节点ID。
         * @example `i-bp13p7vlcb1uihf****`
         */
        Id: string;
    }[];
}
