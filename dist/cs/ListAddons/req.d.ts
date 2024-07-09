export interface ListAddonsRequest {
    /**
     * 地域。
     * 如果传入了cluster_id，该参数将被忽略。
     * region_id、cluster_type、profile、cluster_spec、cluster_version五个参数需要同时传入。
     * @example `cn-hangzhou`
     */
    "region_id"?: string;
    /**
     * 集群类型。
     * 如果传入了cluster_id，该参数将被忽略。
     * region_id、cluster_type、profile、cluster_spec、cluster_version五个参数需要同时传入。
     * @example `ManagedKubernetes`
     */
    "cluster_type"?: string;
    /**
     * 集群子类型。
     * 如果传入了cluster_id，该参数将被忽略。
     * region_id、cluster_type、profile、cluster_spec、cluster_version五个参数需要同时传入。
     * @example `Default`
     */
    "profile"?: string;
    /**
     * 集群规格。
     * 如果传入了cluster_id，该参数将被忽略。
     * region_id、cluster_type、profile、cluster_spec、cluster_version五个参数需要同时传入。
     * @example `ack.pro.small`
     */
    "cluster_spec"?: string;
    /**
     * 集群版本。
     * 如果传入了cluster_id，该参数将被忽略。
     * region_id、cluster_type、profile、cluster_spec、cluster_version五个参数需要同时传入。
     * @example `1.26.3-aliyun.1`
     */
    "cluster_version"?: string;
    /**
     * 集群ID。
     * 指定集群ID时，查询该集群可用的组件列表，此时其他参数将会被忽略。
     * @example `c02b3e03be10643e8a644a843ffcb****`
     */
    "cluster_id"?: string;
}
