export interface ListSasContainerWebDefenseRuleRequest {
    /**
     * 设置搜索资产的条件。该参数JSON格式，包含以下字段：
     * - **name**：检索项
     * - **value**：检索项值
     * - **logicalExp**：多个检索项值生效的逻辑关系。取值：
     *     - **OR**：表示多个检索项值之间是**或**的关系。
     *     - **AND**：表示多个检索项值之间是**与**的关系。
     * @example `[{\"name\":\"ruleName\",\"value\":\"test-1818\",\"logicalExp\":\"AND\"}]`
     */
    "Criteria"?: string;
    /**
     * 设置多个搜索条件间生效的逻辑关系。取值：
     * - **OR**：表示多个搜索条件之间是**或**的关系。
     * - **AND**：表示多个搜索条件之间是**与**的关系。
     * @example `OR`
     */
    "LogicalExp"?: string;
    /**
     * 设置分页查询时，每页显示的资产的数量。默认值为**20**，表示每页显示20条资产信息。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，显示的当前页的页码。起始值为1，默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
}
