export interface UpdateWorkspaceUsersRoleRequest {
    /**
     * 工作空间ID。
     * @example `95296e95-ca89-4c7d-8af9-dedf0ad0****`
     */
    "WorkspaceId": string;
    /**
     * 用户ID。此处为Quick BI的UserID，而非阿里云的UID。
     * - 支持批量传参，用户ID之间用半角逗号（,）隔开。
     * @example `136516262323****,124498444445****`
     */
    "UserIds": string;
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
