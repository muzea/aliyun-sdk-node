export interface GetOpaPluginStatusRequest {
    /**
     * 集群编号列表。
     * > 您可通过调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口查询该值。
     */
    "ClusterIds": string[];
}
