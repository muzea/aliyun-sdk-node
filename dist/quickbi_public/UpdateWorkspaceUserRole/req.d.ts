export interface UpdateWorkspaceUserRoleRequest {
    /**
     * 工作空间ID。
     * @example `95296e95-ca89-4c7d-8af9-dedf0ad0****`
     */
    "WorkspaceId": string;
    /**
     * Quick BI用户ID。
     * @example `f5698bedeb384b1986afccd9e434****`
     */
    "UserId": string;
    /**
     * 预置空间角色ID，已有角色会被覆盖。取值范围：
     * - 25：空间管理员
     * - 26：空间开发者
     * - 27：空间分析师
     * - 30：空间查看者
     * @example `25`
     */
    "RoleId": number;
}
