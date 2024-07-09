export interface GetHybridClusterConfigRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 本地计算节点名称，获取本地计算节点配置信息。
     * 默认获取集群的配置信息。
     * @example `testNode`
     */
    "Node"?: string;
}
