export interface QueryGovernanceKubernetesClusterRequest {
    /**
     * Kubernetes集群名。
     * @example `example-cluster`
     */
    "ClusterName"?: string;
    /**
     * Kubernetes集群ID。
     * @example `c24c9354acxxxxxxx`
     */
    "ClusterId"?: string;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页元素数量。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
