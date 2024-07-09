export interface InstallHybridProxyRequest {
    /**
     * 代理机器uuid列表。
     */
    "YundunUuids"?: string[];
    /**
     * 集群名称。
     * @example `proxy-test`
     */
    "ClusterName"?: string;
    /**
     * 客户端安装码。
     * @example `Z9c8SA`
     */
    "InstallCode"?: string;
}
