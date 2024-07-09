export interface ListAegisContainerPluginRuleRequest {
    /**
     * 指定请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 查询条件。
     * @example `[{\"name\": \"name\", \"value\": \"test-1818\"}]`
     */
    "Criteria"?: string;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，当前页显示数据条数。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 规则类型。取值：
     * - **0**：用户自定义
     * - **1**：系统内置
     * @example `0`
     */
    "RuleType"?: number;
}
