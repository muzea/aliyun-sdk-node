export interface DescribeClustersRequest {
    /**
     * 根据集群Name进行模糊匹配查询。
     * @example `test`
     */
    "name"?: string;
    /**
     * 集群类型。
     * @example `ManagedKubernetes`
     */
    "clusterType"?: string;
    "resource_group_id"?: string;
}
