export interface GetAegisContainerPluginRuleCriteriaResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `DA8133CC-CCA0-5CF2-BF64-FE7D52C44***`
     */
    RequestId: string;
    /**
     * 支持检索项信息。
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
         * 对应的查询条件的名称。
         * - **instanceId**：容器实例ID。
         * - **clusterId**：集群ID。
         * - **regionId**：容器地域。
         * - **clusterName**：集群名称。
         * - **clusterType**：集群类型。
         * - **hostIp**：公网IP。
         * - **pod**：pod。
         * - **podIp**：pod IP。
         * - **containerId**：容器ID。
         * - **containerScope**：容器类型。
         * @example `containerScope`
         */
        Name: string;
        /**
         * 值列表。
         * @example `NO,YES`
         */
        Values: string;
    }[];
}
