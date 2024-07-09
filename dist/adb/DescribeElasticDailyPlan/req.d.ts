export interface DescribeElasticDailyPlanRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * >您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp11q28kvl688****`
     */
    "DBClusterId": string;
    /**
     * 弹性计划名称。取值说明：
     * - 长度为2~30字符。
     * - 由大写字母、小写字母、数字或下划线（_）组成。
     * @example `realtimeplan`
     */
    "ElasticPlanName"?: string;
    /**
     * 资源组名称。
     * >您可以调用[DescribeDBResourceGroup](~~466685~~)接口查看资源组名称。
     * @example `test`
     */
    "ResourcePoolName"?: string;
    /**
     * 当天弹性计划的起始日期，格式：yyyy-MM-dd。
     * @example `2022-12-02`
     */
    "ElasticDailyPlanDay"?: string;
    /**
     * 当天弹性计划执行状态，同时查询多个状态用半角逗号（,）分隔，取值说明：
     * - **1**：未执行。
     * - **2**：执行中。
     * - **3**：执行成功。
     * - **4**：执行失败。
     *
     * @example `3`
     */
    "ElasticDailyPlanStatusList"?: string;
}
