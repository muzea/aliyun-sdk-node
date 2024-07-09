export interface DetachClusterFromHubRequest {
    /**
     * 主控集群的ID。您可以调用[DescribeHubClusters](~~424404~~)接口获取已创建的主控集群。
     * @example `cb09fda0dc2f94a8397c76638c7ec****`
     */
    "ClusterId": string;
    /**
     * 从主控集群中待移除的子集群ID数组。您可以调用[DescribeManagedClusters](~~424408~~)接口获取主集群下已添加的子集群ID。
     * 取值格式为JSON格式的字符串，可以被解析为一个字符串数组。
     * @example `["c1c731554c1ec4a1ca9bb690ff9ed****"]`
     */
    "ClusterIds": string;
    /**
     * 是否仅从服务网格（ASM）中移除子集群。
     * - true：仅从服务网格（ASM）移除子集群。
     * - false：同时从服务网格（ASM）和ACK One中移除子集群。
     * 若该参数未设置，默认按照取值为**false**处理，即默认子集群同时从服务网格（ASM）和ACK One中移除。
     * @example `false`
     */
    "DetachFromMesh"?: boolean;
}
