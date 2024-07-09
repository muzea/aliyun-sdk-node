export interface CreateHybridProxyClusterRequest {
    /**
     * 集群名称。
     * @example `代理`
     */
    "ClusterName": string;
    /**
     * 集群备注。
     * @example `IDC代理集群`
     */
    "Remark"?: string;
    /**
     * 集群接入地址，ip或则域名。
     * @example `117.71.34.128`
     */
    "Ip"?: string;
}
