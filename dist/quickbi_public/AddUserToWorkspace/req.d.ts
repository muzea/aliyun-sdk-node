export interface AddUserToWorkspaceRequest {
    /**
     * 工作空间ID。
     * @example `95296e95-ca89-4c7d-8af9-dedf0ad0****`
     */
    "WorkspaceId": string;
    /**
     * 被添加的Quick BI用户ID。
     * @example `de4bc5f9429141cc8091cdd1c15b****`
     */
    "UserId": string;
    /**
     * 预置空间角色ID。取值范围：
     * - 25：空间管理员
     * - 26：空间开发者
     * - 27：空间分析师
     * - 30：空间查看者
     * @example `25`
     */
    "RoleId": number;
}
