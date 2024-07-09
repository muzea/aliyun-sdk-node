export interface SearchWaterMarkTemplateRequest {
    /**
     * 分页查询时设置的每页大小。
     * - 上限值：**100**。
     * - 默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 当前页号。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 水印模板状态。
     * - **All**：表示所有，默认值。
     * - **Normal**：表示正常。
     * - **Deleted**：表示已删除。
     * @example `Normal`
     */
    "State"?: string;
}
