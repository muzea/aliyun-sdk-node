export interface DescribeImageBaselineCheckSummaryRequest {
    /**
     * 要查询的基线的风险等级。多个等级用英文逗号（,）分隔。取值：
     * - **high**：高危
     * - **medium**：中危
     * - **low**：低危
     * @example `high`
     */
    "RiskLevel"?: string;
    /**
     * 基线的查询条件。
     * @example `Unauthorized access`
     */
    "Criteria"?: string;
    /**
     * 要查询的基线的查询类型。取值：
     * - **BaselineNameAlias**：基线名称
     * - **BaselineClassAlias**：基线分类
     * @example `BaselineNameAlias`
     */
    "CriteriaType"?: string;
    /**
     * 分页查询时，每页显示的数据的最大条数。默认值为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 从返回结果中的第几页开始显示。起始值为**1**。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c60b77fe62093480db6164a3c2fa5****`
     */
    "ClusterId"?: string;
    /**
     * 扫描范围集合。
     */
    "ScanRange"?: string[];
}
