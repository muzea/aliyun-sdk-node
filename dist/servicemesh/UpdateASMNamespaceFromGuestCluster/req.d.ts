export interface UpdateASMNamespaceFromGuestClusterRequest {
    /**
     * 网格ID。
     * @example `cbf9ca9e6d5dc4c87a3ecd0ebf1e*****`
     */
    "ServiceMeshId": string;
    /**
     * 同步命名空间的Kubernetes集群ID。Kubernetes集群已添加到ServiceMeshId指定的服务网格中。
     * @example `c6f6d46583def494ba1f2e2937c8*****`
     */
    "K8sClusterId": string;
}
