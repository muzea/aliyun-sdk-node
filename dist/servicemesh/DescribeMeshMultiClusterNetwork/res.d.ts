export interface DescribeMeshMultiClusterNetworkResponse {
    /**
     * Id of the request
     * @example `71680038-8009-5073-B43E-C057E9******`
     */
    RequestId: string;
    /**
     * 多个Kubernetes集群的网络分区配置描述，map的键为Kubernetes集群的集群id、值为该集群的网络分区配置。
     */
    MultiClusterNetworks: any;
}
