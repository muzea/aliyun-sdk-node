export interface GetHybridClusterConfigResponse {
    /**
     * 配置信息。用于配置本地集群节点。
     * - 若参数Node为空，获取的是混合云集群的配置信息。
     * - 若参数Node为指定本地计算节点，获取的是本地计算节点的配置信息。
     * @example `ClNjaGcyI6W119Cg****`
     */
    ClusterConfig: string;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
