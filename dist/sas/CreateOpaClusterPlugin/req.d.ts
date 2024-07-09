export interface CreateOpaClusterPluginRequest {
    /**
     * 容器集群的ID列表。
     * > 您可通过调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口查询该值。
     */
    "ClusterIds": string[];
}
