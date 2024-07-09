export interface ListOrganizationRoleUsersRequest {
    /**
     * 组织角色ID，包括预置角色和自定义角色：
     * - 组织管理员（预置角色）：111111111
     * - 权限管理员（预置角色）：111111112
     * - 普通用户（预置角色）：111111113
     * - 自定义角色：自定义角色对应的角色ID
     * @example `111111111`
     */
    "RoleId": number;
    /**
     * 页码。
     * - 默认值1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页行数。
     * - 默认值10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 组织成员昵称的关键字。
     * @example `小刘`
     */
    "Keyword"?: string;
}
