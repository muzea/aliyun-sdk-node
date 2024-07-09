export interface QueryOrganizationWorkspaceListRequest {
    /**
     * 空间名称的关键字。
     * @example `程序`
     */
    "Keyword"?: string;
    /**
     * 工作空间列表的当前页码：
     * - 起始值：1
     * - 默认值：1
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 分页查询时的每页行数：
     * - 默认值：10
     * - 最大值：1000
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 用户在Quick BI的ID。
     * @example `fe67f61a35a94b7da1a34ba174a7****`
     */
    "UserId"?: string;
}
