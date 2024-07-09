export interface ConvertK8sResourceRequest {
    /**
     * 资源类型，仅支持设置为deployment。
     * @example `deployment`
     */
    "ResourceType": string;
    /**
     * 资源名。
     * @example `deployment-to-convert`
     */
    "ResourceName": string;
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 集群ID，参数详情的获取请参见[ListCluster](~~154995~~)。
     * @example `b07c8192-****-adf4f7447720`
     */
    "ClusterId": string;
}
