export interface DescribeClusterAddonMetadataRequest {
    /**
     * 集群ID
     * @example `c71d616e629ff40d5b42d7bb87770****`
     */
    "cluster_id": string;
    /**
     * 组件ID
     * @example `coredns`
     */
    "component_id": string;
    /**
     * 组件版本
     * @example `1.8.4.1`
     */
    "version"?: string;
}
