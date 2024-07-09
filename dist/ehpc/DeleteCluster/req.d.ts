export interface DeleteClusterRequest {
    /**
     * 指定释放的集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-QKKVqO****`
     */
    "ClusterId": string;
    /**
     * 是否释放由E-HPC创建的ECS实例。
     * 默认值：true
     * @example `true`
     */
    "ReleaseInstance"?: string;
}
