export interface ListWorkspaceRoleUsersRequest {
    /**
     * 空间角色ID，包括预置角色和自定义角色：
     * - 25：空间管理员（预置角色）
     * - 26：开发者（预置角色）
     * - 27：分析者（预置角色）
     * - 30：阅览者（预置角色）
     * - 自定义角色：自定义角色对应的角色ID
     * @example `25`
     */
    "RoleId": number;
    /**
     * 工作空间ID。
     * @example `726bee5a-****-43e1-9a8e-b550f0120f35`
     */
    "WorkspaceId": string;
    /**
     * 分页查询时的当前页：
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
     * 用户昵称的关键字。
     * @example `测试pop用户`
     */
    "Keyword"?: string;
}
