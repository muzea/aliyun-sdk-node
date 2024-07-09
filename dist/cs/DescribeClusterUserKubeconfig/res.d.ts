export interface DescribeClusterUserKubeconfigResponse {
    /**
     * 集群访问配置。关于如何查看访问集群配置信息，请参见[配置集群凭据](~~86494~~)。
     * @example `apiVersion: v1****`
     */
    config: string;
    /**
     * kubeconfig的过期时间。格式：RFC3339格式的UTC时间。
     * @example `2024-03-10T09:56:17Z`
     */
    expiration: string;
}
