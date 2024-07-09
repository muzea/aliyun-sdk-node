export interface DescribeImageCriteriaResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413BB68`
     */
    RequestId: string;
    /**
     * 镜像查询条件的信息列表。
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
         * 查询条件的名称。
         * - **tag**：镜像标签。
         * - **digest**：镜像digest。
         * - **vulStatus**：漏洞状态。
         * - **alarmStatus**：安全告警状态。
         * - **riskStatus**：风险状态。
         * - **registryType**：镜像仓类型。
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
