export interface ListWorkspacesRequest {
    /**
     * 当前页数。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页数据显示条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 生产空间名称（支持模糊搜索）。
     * @example `test`
     */
    "Name"?: string;
}
