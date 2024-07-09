export interface GetRegisteredServiceEndpointsRequest {
    /**
     * 服务网格实例ID
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
     */
    "ServiceMeshId": string;
    /**
     * 命名空间
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 集群ID列表，用逗号分隔
     * @example `c8b054ee8c3914d079b5ce9733328****,c58faedb8a78640d3aeb0372e4c02****`
     */
    "ClusterIds"?: string;
    /**
     * 服务名称
     * @example `reviews`
     */
    "Name"?: string;
    /**
     * 服务类型，取值：
     * - `ServiceEntry`：为服务网格ServiceEntry中注册的服务
     * - `Kubernetes`：为数据面Kubernetes集群注册的服务
     * @example `Kubernetes`
     */
    "ServiceType"?: string;
}
