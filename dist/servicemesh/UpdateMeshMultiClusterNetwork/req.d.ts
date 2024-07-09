export interface UpdateMeshMultiClusterNetworkRequest {
    /**
     * 服务网格实例ID。
     * @example `cb8963379255149cb98c8686f274x****`
     */
    "ServiceMeshId": string;
    /**
     * 多个Kubernetes集群的网络分区配置描述，map的键为Kubernetes集群的集群id、值为该集群的网络分区配置
     */
    "MultiClusterNetworks"?: any;
}
