export interface ListGroupsRequest {
    /**
     * 分页查询时设置的每页显示的服务群组数量，默认为100。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 服务群组列表的当前页码，默认值为1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 设置的过滤名称，支持模糊匹配。
     * @example `foo`
     */
    "Filter"?: string;
    /**
     * 工作空间ID。
     * @example `123***`
     */
    "WorkspaceId"?: string;
}
