export interface QueryOrganizationRoleConfigRequest {
    /**
     * 组织角色ID，包括预置角色和自定义角色：
     * - 组织管理员（预置角色）：111111111
     * - 权限管理员（预置角色）：111111112
     * - 普通用户（预置角色）：111111113
     * - 自定义角色：自定义角色对应的角色ID
     * @example `111111111`
     */
    "RoleId": number;
}
