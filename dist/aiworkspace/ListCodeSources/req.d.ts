export interface ListCodeSourcesRequest {
    /**
     * 代码配置的显示名称，支持模糊匹配。
     * @example `MyDataSource`
     */
    "DisplayName"?: string;
    /**
     * 代码配置列表的页码。起始值为1，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。默认为20。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 用于排序的字段名，取值如下：
     * - GmtModifyTime：代码源修改时间。
     * - DisplayName：展示名称。
     * - CodeSourceId：代码源ID。
     * - GmtCreateTime（默认值）：代码源创建时间。
     * @example `GmtModifyTime`
     */
    "SortBy"?: string;
    /**
     * 分页查询时，对指定的排序字段进行升序或降序，取值如下：
     * - ASC（默认值）：升序。
     * - DESC：降序。
     * @example `desc`
     */
    "Order"?: string;
    /**
     * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * @example `1234`
     */
    "WorkspaceId"?: string;
}
