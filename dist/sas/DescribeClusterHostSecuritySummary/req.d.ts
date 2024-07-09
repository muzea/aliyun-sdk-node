export interface DescribeClusterHostSecuritySummaryRequest {
    /**
     * 访问源的IP地址。
     * @example `222.71.XXX.XXX`
     */
    "SourceIp"?: string;
    /**
     * 容器集群的ID。
     * @example `c3aaf6c8085f84791882eef200cd2****`
     */
    "ClusterId"?: string;
    /**
     * 容器检索项。取值：
     * - **instanceId**：实例ID。
     * - **appName**：应用名。
     * - **clusterId**：集群ID。
     * - **regionId**：地域。
     * - **nodeName**：节点名。
     * - **namespace**：命名空间。
     * - **clusterName**：集群名称。
     * - **image**：镜像名称。
     * - **imageRepoName**：镜像的仓库名称。
     * - **imageRepoNamespace**：镜像的仓库命名空间。
     * - **imageRepoTag**：镜像的标签。
     * - **imageDigest**：镜像摘要。
     * @example `clusterId`
     */
    "ContainerFieldName"?: string;
    /**
     * 容器检索项对应值。
     * @example `c1fdb5fd8d42e425d88fd73eec7be****`
     */
    "ContainerFieldValue"?: string;
    /**
     * 查询类型。取值：
     * - **containerId**：容器ID。
     * - **uuid**：资产ID。
     * @example `uuid`
     */
    "TargetType"?: string;
}
