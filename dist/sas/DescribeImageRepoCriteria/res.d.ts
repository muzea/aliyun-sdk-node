export interface DescribeImageRepoCriteriaResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F35F45B0-5D6B-4238-BE02-A62D0760E840`
     */
    RequestId: string;
    /**
     * 镜像仓支持检索项信息列表。
     */
    CriteriaList: {
        /**
         * 查询条件的类型。取值：
         * - **input**：需要手动输入查询字段。
         * - **select**：需要从下拉列表中选择查询条件的子类型。
         * @example `select`
         */
        Type: string;
        /**
         * 检索条件的名称。取值如下：
         * - **instanceId**：镜像实例ID。
         * - **repoName**：镜像仓名称。
         * - **repoId**：镜像仓ID。
         * - **repoNamespace**：镜像仓命名空间。
         * - **regionId**：镜像地域。
         * - **vulStatus**：是否存在漏洞。
         * - **alarmStatus**：是否存在安全告警。
         * - **hcStatus**：是否存在基线风险。
         * - **riskStatus**：是否存在风险。
         * - **registryType**：镜像仓库的类型。
         * - **imageId**：镜像ID。
         * - **tag**：镜像标签。
         * @example `vulStatus`
         */
        Name: string;
        /**
         * **Type**（查询条件的类型）为**select**（选择型）时，可选项的值。
         * > **Type**（查询条件的类型）为**input**（输入型）时，该参数返回值为空。
         * @example `NO,YES`
         */
        Values: string;
    }[];
}
