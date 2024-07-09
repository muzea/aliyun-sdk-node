export interface DescribeContainerCriteriaResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7`
     */
    RequestId: string;
    /**
     * 支持检索项信息列表。
     */
    CriteriaList: {
        /**
         * 查询条件的类型。取值：
         * - **input**：需要手动输入查询字段。
         * - **select**：需要从下拉列表中选择查询条件的子类型。
         * @example `input`
         */
        Type: string;
        /**
         * 对应的查询条件的名称。
         * - **instanceId**：容器实例ID。
         * - **clusterId**：集群ID。
         * - **regionId**：容器地域。
         * - **clusterName**：集群名称。
         * - **image**：镜像名称。
         * - **imageRepoName**：镜像仓名称。
         * - **imageRepoNamespace**：镜像仓命名空间。
         * - **imageRepoTag**：镜像仓标签。
         * - **imageDigest**：镜像digest。
         * - **clusterType**：集群类型。
         * - **hostIp**：公网IP。
         * - **pod**：pod。
         * - **podIp**：pod IP。
         * - **containerId**：容器ID。
         * - **vulStatus**：容器是否存在漏洞。
         * - **alarmStatus**：容器是否存在安全告警。
         * - **riskStatus**：容器是否存在风险。
         * - **riskLevel**：容器风险等级。
         * - **containerScope**：容器类型。
         * @example `clusterId`
         */
        Name: string;
        /**
         * **Type**（查询条件的类型）为**select**（选择型）时，可选项的值。
         * > **Type**（查询条件的类型）为**input**（输入型）时，该参数返回值为空。
         * @example `ManagedKubernetes,NotManagedKubernetes,PrivateKubernetes`
         */
        Values: string;
    }[];
}
