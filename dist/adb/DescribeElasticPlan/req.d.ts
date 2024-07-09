export interface DescribeElasticPlanRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * >您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp278jg9****`
     */
    "DBClusterId": string;
    /**
     * 弹性计划名称，取值说明：
     * - 长度为2~30字符。
     * - 由大写字母、小写字母、数字或下划线（_）组成。
     * >不填写该参数时，返回指定集群下所有弹性计划的详细信息。
     * @example `realtime`
     */
    "ElasticPlanName"?: string;
    /**
     * 资源组名称。
     * >- 您可以调用[DescribeDBResourceGroup](~~466685~~)接口查看资源组名称。
     * @example `USER_DEFAULT`
     */
    "ResourcePoolName"?: string;
    /**
     * 弹性计划是否生效，取值说明：
     * - **true**（默认值）：生效。
     * - **false**：不生效。
     * @example `true`
     */
    "ElasticPlanEnable"?: boolean;
}
