export interface StartNodesRequest {
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
     * 要启动的节点信息列表。
     */
    "Instance": {
        /**
         * 第N个要启动的节点的实例ID。N的取值范围：1~100
         * 请确保节点状态必须为stopped（已停止），您可以调用[ListNodes](~~87161~~)查询待启动节点的状态 。
         * @example `i-bp13p7vlcb1uihfv****`
         */
        Id: string;
    }[];
}
