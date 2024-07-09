export interface DescribeCensResponse {
    /**
     * 请求ID。
     * @example `BD65C0AD-D3C6-48D3-8D93-38D2015C****`
     */
    RequestId: string;
    /**
     * 添加到同一服务网格中，但所处VPC不同，也没有通过云企业网连通网络的Kuberenetes集群列表。
     */
    Clusters: string[];
}
