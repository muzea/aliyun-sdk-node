export interface DescribeClusterImageSecuritySummaryRequest {
    /**
     * 访问源的IP地址。
     * @example `60.190.XXX.XXX`
     */
    "SourceIp"?: string;
    /**
     * 集群ID。
     * @example `c3aaf6c8085f84791882eef200cd2****`
     */
    "ClusterId"?: string;
    /**
     * 容器检索项。取值：
     * - **instanceId**：容器实例ID
     * - **clusterId**：集群ID
     * - **regionId**：容器地域
     * - **clusterName**：集群名称
     * - **image**：镜像名称
     * - **imageRepoName**：镜像仓名称
     * - **imageRepoNamespace**：镜像仓命名空间
     * - **imageRepoTag**：镜像仓标签
     * - **imageDigest**：镜像digest
     * - **clusterType**：集群类型
     * - **hostIp**：公网IP
     * - **pod**：pod
     * - **podIp**：pod IP
     * - **containerId**：容器ID
     * - **vulStatus**：容器是否存在漏洞
     * - **alarmStatus**：容器是否存在安全告警
     * - **riskStatus**：容器是否存在风险
     * - **riskLevel**：容器风险等级
     * - **containerScope**：容器类型
     * @example `clusterId`
     */
    "ContainerFieldName"?: string;
    /**
     * 容器检索项对应值。
     * @example `c2ac28b2d0c734df29a21d29f18ac****`
     */
    "ContainerFieldValue"?: string;
    /**
     * 镜像仓库名称。
     * @example `repo`
     */
    "ImageRepoName"?: string;
    /**
     * 镜像仓库命名空间。
     * @example `namespace`
     */
    "ImageRepoNamespace"?: string;
    /**
     * 镜像的标签。
     * @example `3.54.0.1`
     */
    "ImageTag"?: string;
    /**
     * 镜像摘要。
     * @example `402902de6480a020b9f29e7105e77b8a218bc1cccbc3935d3b38c8ea9ba2****`
     */
    "ImageDigest"?: string;
}
