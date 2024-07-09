export interface DescribeImageBaselineCheckResultRequest {
    /**
     * 镜像UUID。
     * @example `a910053dd4710173ecc9e9d8931f****`
     */
    "ImageUuid": string;
    /**
     * 要查询的基线的风险等级。多个等级用英文逗号（,）分隔，默认全填。取值：
     * - **high**：高危
     * - **medium**：中危
     * - **low**：低危
     * @example `high,medium,low`
     */
    "RiskLevel"?: string;
    /**
     * 基线的查询条件。
     * @example `ak_leak`
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
     * 分页查询时，每页显示的登录配置信息的数量。默认值为**20**，表示每页显示20条登录配置信息。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，当前页的页码。默认值为20，表示当前是第1页。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 扫描范围集合。
     */
    "ScanRange"?: string[];
}
