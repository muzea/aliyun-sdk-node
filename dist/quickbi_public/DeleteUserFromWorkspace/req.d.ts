export interface DeleteUserFromWorkspaceRequest {
    /**
     * 工作空间ID。
     * @example `95296e95-ca89-4c7d-8af9-dedf0ad0****`
     */
    "WorkspaceId": string;
    /**
     * 待删除的用户ID。此处的用户ID为Quick BI的UserID，而非阿里云的UID。
     * @example `de4bc5f9429141cc8091cdd1c15b****`
     */
    "UserId": string;
}
