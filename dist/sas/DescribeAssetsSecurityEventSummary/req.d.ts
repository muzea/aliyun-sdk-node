export interface DescribeAssetsSecurityEventSummaryRequest {
    /**
     * 访问源的IP地址。
     * @example `113.108.XX.XX`
     */
    "SourceIp"?: string;
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
     * @example `clusterName`
     */
    "ContainerFieldName"?: string;
    /**
     * 容器检索项对应值。
     * @example `arms-prom-operator`
     */
    "ContainerFieldValue"?: string;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `cc58f827d893f4d7fb3e34b5d4395****`
     */
    "ClusterId"?: string;
}
