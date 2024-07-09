export interface ListClusterPluginInfoRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 插件名称。
     * @example `alihips`
     */
    "PluginName"?: string;
    /**
     * 集群ID列表。
     */
    "ClusterIds": string[];
}
