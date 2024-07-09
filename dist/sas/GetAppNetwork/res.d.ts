export interface GetAppNetworkResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7D46EDB0-xxx`
     */
    RequestId: string;
    /**
     * 应用网络拓扑信息。
     */
    AppNetwork: {
        /**
         * 应用节点信息。
         */
        Node: {
            /**
             * 风险等级。取值：
             * - **3**：高危。
             * - **2**：中危。
             * - **1**：低危。
             * - **0**：安全。
             * - **-1**：未知。
             * @example `0`
             */
            RiskLevel: string;
            /**
             * 节点ID。
             * @example `1274`
             */
            Id: string;
            /**
             * 命名空间ID。
             * @example `1`
             */
            NamespaceId: string;
            /**
             * 容器id列表。
             */
            ContainerIds: string[];
            /**
             * 节点类型。取值：
             * - **app**：应用
             * - **internet**：外部网络节点
             * @example `app`
             */
            Type: string;
            /**
             * 节点名称。
             * @example `console`
             */
            Name: string;
        }[];
        /**
         * 拓扑边信息。
         */
        Edge: {
            /**
             * 边的ID。
             * @example `3534`
             */
            Id: string;
            /**
             * 源节点ID。
             * @example `101`
             */
            SrcNodeId: string;
            /**
             * 源节点类型。
             * - **app**：应用。
             * - **internet**：外部网络节点。
             * @example `app`
             */
            SrcNodeType: string;
            /**
             * 目的节点ID。
             * @example `102`
             */
            DstNodeId: string;
            /**
             * 目的节点类型。
             * - **app**：应用。
             * - **internet**：外部网络节点。
             * @example `app`
             */
            DstNodeType: string;
            /**
             * 目的端口号。
             * @example `8080`
             */
            Port: string;
        }[];
        /**
         * 命名空间。
         */
        Namespace: {
            /**
             * 命名空间ID。
             * @example `1`
             */
            Id: string;
            /**
             * 命名空间名称。
             * @example `default`
             */
            Name: string;
        }[];
    };
}
