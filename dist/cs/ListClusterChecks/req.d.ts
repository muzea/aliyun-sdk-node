export interface ListClusterChecksRequest {
    /**
     * 集群ID。
     * @example `ce0da5a1d627e4e9e9f96cae8ad07****`
     */
    "cluster_id"?: string;
    /**
     * 检查类型。
     * @example `ClusterUpgrade`
     */
    "type"?: string;
    /**
     * 筛选指定的检查对象。
     */
    "target"?: string;
}
