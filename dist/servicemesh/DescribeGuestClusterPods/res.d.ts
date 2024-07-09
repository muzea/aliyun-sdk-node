export interface DescribeGuestClusterPodsResponse {
    /**
     * 请求ID
     * @example `EDDC0D86-2FC3-56FB-9213-96EB0A3523F1`
     */
    RequestId: string;
    /**
     * Kubernetes集群中的Pod名称列表
     */
    PodList: string[];
}
