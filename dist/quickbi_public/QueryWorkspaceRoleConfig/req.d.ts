export interface QueryWorkspaceRoleConfigRequest {
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
}
