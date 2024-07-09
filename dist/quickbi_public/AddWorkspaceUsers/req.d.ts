export interface AddWorkspaceUsersRequest {
    /**
     * 工作空间ID。
     * @example `95296e95-ca89-4c7d-8af9-dedf0ad0****`
     */
    "WorkspaceId": string;
    /**
     * 用户ID。此处为Quick BI的UserID，而非阿里云的UID。
     * - 支持批量传参，用户ID之间用半角逗号（,）隔开。
     * @example `de4bc5f9429141cc8091cdd1c15b****`
     */
    "UserIds": string;
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
