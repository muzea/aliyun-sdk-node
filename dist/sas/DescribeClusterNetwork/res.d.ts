export interface DescribeClusterNetworkResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C286491D-4A2F-589A-B63B-D2AD3DA9BD71`
     */
    RequestId: string;
    /**
     * 集群维度的网络拓扑边信息列表。
     */
    ClusterNetwork: {
        /**
         * 节点信息列表。
         */
        Node: {
            /**
             * 节点类型。取值：
             * - **cluster**：集群。
             * - **internet**：集群外部网络节点。
             * @example `cluster`
             */
            Type: string;
            /**
             * 风险等级。取值：
             * - **3**：高危。
             * - **2**：中危。
             * - **1**：低危。
             * - **0**：安全。
             * - **-1**：未知。
             * @example `3`
             */
            RiskLevel: string;
            /**
             * 网络拓扑开关。取值：
             * - **ON**：开启。
             * - **OFF**：关闭。
             * @example `ON`
             */
            NetTopoSwitch: string;
            /**
             * 网络类型。取值：
             * - **0**：经典网络。
             * - **1**：专有网络。
             * @example `1`
             */
            InterceptionType: number;
            /**
             * 微隔离开关。取值：
             * - **0**：关闭。
             * - **1**：开启。
             * @example `1`
             */
            CnnfSwitch: number;
            /**
             * 节点名称。
             * @example `testwww`
             */
            Name: string;
            /**
             * 节点编号。
             * @example `cfeb7a9f99ce740e98c5595d0fe37****
            `
             */
            Id: string;
        }[];
        /**
         * 拓扑边信息列表。
         */
        Edge: {
            /**
             * 目的节点ID。
             * @example `cfb41a869c71e4678a97021582dd8****`
             */
            DstNodeId: string;
            /**
             * 拓扑边的端口号。
             * @example `6164`
             */
            Port: string;
            /**
             * 源节点ID。
             * @example `cfb41a869c71e4678a97021582dd8****`
             */
            SrcNodeId: string;
            /**
             * 源节点类型。
             * - **cluster**：集群。
             * - **internet**：外部网络节点。
             * @example `cluster`
             */
            SrcNodeType: string;
            /**
             * 目的节点类型。
             * - **cluster**：集群。
             * @example `cluster`
             */
            DstNodeType: string;
            /**
             * 拓扑边的编号。
             * @example `1`
             */
            Id: string;
        }[];
    };
}
