export interface DescribeMetricRuleTemplateListRequest {
    /**
     * 报警模板名称。
     * @example `ECS_Template1`
     */
    "Name"?: string;
    /**
     * 报警模板名称关键字。
     * @example `ECS`
     */
    "Keyword"?: string;
    /**
     * 报警模板ID。
     * @example `70****`
     */
    "TemplateId"?: number;
    /**
     * 页码。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示模板的记录条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否显示报警模板应用到应用分组的历史记录。取值：
     * - true：显示。
     * - false（默认值）：不显示。
     * @example `false`
     */
    "History"?: boolean;
    /**
     * 排序方式。取值：
     * - true（默认值）：升序。
     * - false：降序。
     * @example `true`
     */
    "Order"?: boolean;
    /**
     * 排序依据。取值：
     * - gmtMotified：修改日期。
     * - gmtCreate（默认值）：创建日期。
     * @example `gmtCreate`
     */
    "OrderBy"?: string;
}
