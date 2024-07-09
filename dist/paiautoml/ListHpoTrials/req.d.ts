export interface ListHpoTrialsRequest {
    /**
     * HPO实验id
     * @example `abcde`
     */
    "ExperimentId"?: string;
    /**
     * 1-based 结果页面序号。做为搜索实验的限制条件。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 当前查询的页大小（每页上显示的trials的个数）
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排序依据
     * @example `FINAL_METRIC 或着 CREATE_TIME`
     */
    "SortBy"?: string;
    /**
     * 分页查询时，对指定的排序字段进行升序或降序。默认ASC。
     * - ASC
     * 升序
     * - DESC
     * 降序
     * @example `ASC`
     */
    "Order"?: string;
}
