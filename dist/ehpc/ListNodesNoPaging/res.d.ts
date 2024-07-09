export interface ListNodesNoPagingResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    Nodes: {
        /**
         * 节点列表信息。
         */
        NodeInfo: {
            /**
             * 节点状态。可能值：
             * - uninit：安装中
             * - exception：异常
             * - running：运行中
             * - initing：初始化中
             * - releasing：释放中
             * - untracking：未加入集群
             * - stopped：已停止
             * @example `untracking`
             */
            Status: string;
            /**
             * 节点名称。
             * @example `compute0`
             */
            HostName: string;
            /**
             * 节点规格。
             * @example `ecs.n1.tiny`
             */
            InstanceType: string;
            /**
             * 镜像ID。
             * @example `centos_7_02_64_20G_alibase_20170818****`
             */
            ImageId: string;
            /**
             * 节点ID。
             * @example `i-bp13p7vlcb1uihfv****`
             */
            Id: string;
        }[];
    };
}
