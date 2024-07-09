export interface BindHybridProxyRequest {
    /**
     * 代理集群名称。
     * @example `sas-proxy`
     */
    "ClusterName": string;
    /**
     * 接入代理的机器UUID列表。
     */
    "YundunUuids": string[];
}
