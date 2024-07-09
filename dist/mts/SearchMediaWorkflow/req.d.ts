export interface SearchMediaWorkflowRequest {
    /**
     * 分查询时设置的每页大小。
     * - 上限值：**100**。
     * - 默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 当前页号。 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 媒体工作流状态列表。 可多选，用半角逗号（,）分隔。默认值：“**Inactive,Active,Deleted**”（搜索全部）。取值范围：
     * - **Inactive**：已停用。
     * - **Active**：已启用。
     * - **Deleted**：已删除。
     * @example `Inactive,Active,Deleted`
     */
    "StateList"?: string;
}
