export interface DescribeGuestClusterNamespacesRequest {
    /**
     * 服务网格ID。
     * @example `ce134b0727aa2492db69f6c3880e****`
     */
    "ServiceMeshId": string;
    /**
     * 加入服务网格的Kubernetes集群ID。
     * @example `c584d805c7bd442b8bac421f9849f****`
     */
    "GuestClusterID": string;
    /**
     * 是否同时返回命名空间的标签。
     * @example `true`
     */
    "ShowNsLabels"?: boolean;
}
