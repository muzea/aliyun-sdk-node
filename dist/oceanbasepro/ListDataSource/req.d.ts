export interface ListDataSourceRequest {
    /**
     * 数据源的名称或 ID。
     * @example `sourcename`
     */
    "SearchKey"?: string;
    /**
     * 数据源类型的集合。
     */
    "Types"?: string[];
    /**
     * 数据源排序的字段，包括 gmtCreate（默认值）和 gmtModified。
     * @example `gmtCreate`
     */
    "SortField"?: string;
    /**
     * 数据源排序的顺序，包括 `asc`（升序）和 `descend`（降序）。
     * @example `descend`
     */
    "Order"?: string;
    /**
     * 页序号，分页查询时生效。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 页大小，分页查询时生效。
     * @example `10`
     */
    "PageSize"?: string;
}
