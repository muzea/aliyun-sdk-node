export interface QueryWorkspaceUserListRequest {
    /**
     * 工作空间ID。
     * @example `95296e95-ca89-4c7d-8af9-dedf0ad0****`
     */
    "WorkspaceId": string;
    /**
     * 工作空间成员用户名的关键字。
     * @example `分析`
     */
    "Keyword"?: string;
    /**
     * 工作空间成员列表的当前页码：
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
}
