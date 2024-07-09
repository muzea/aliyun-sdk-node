export interface GetClusterAddonInstanceRequest {
    /**
     * 集群ID。
     * @example `c02b3e03be10643e8a644a843ffcb****`
     */
    "cluster_id"?: string;
    /**
     * 组件实例名称。
     * @example `ack-node-problem-detector`
     */
    "instance_name"?: string;
}
