export interface SearchTemplateRequest {
    /**
     * 结果分页查询时设置的每页大小。
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
     * 需要搜索的转码模板状态。
     * - **All**表示所有。
     * - **Normal**表示正常。
     * - **Deleted**表示已删除。
     * - 默认值：**All**。
     * @example `Normal`
     */
    "State"?: string;
    /**
     * 按模板名称前缀搜索时填入的前缀。
     * @example `S00000001`
     */
    "NamePrefix"?: string;
}
