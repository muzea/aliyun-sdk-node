export interface SearchPipelineRequest {
    /**
     * 分页查询时设置的每页行数大小。
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
     * 需要搜索的管道状态。如果为空则默认搜索所有管道。
     * - **All**：全部管道。
     * - **Active**：管道开启。
     * - **Paused**：管道暂停。
     * - 默认值：**All**。
     * @example `Paused`
     */
    "State"?: string;
}
