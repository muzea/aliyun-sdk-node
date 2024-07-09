export interface DescribeGuestClusterPodsRequest {
    /**
     * 服务网格ID
     * @example `c78d60f98fa43403ab6e0701b2678****`
     */
    "ServiceMeshId": string;
    /**
     * 加入网格的Kubernetes集群ID
     * @example `c49ad2169d5a04f2d89dfc4b6bcu****`
     */
    "GuestClusterID": string;
    /**
     * 命名空间
     * @example `default`
     */
    "Namespace": string;
}
