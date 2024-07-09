export interface ListWorkspaceUsersRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * @example `12345`
     */
    "WorkspaceId"?: string;
    /**
     * 支持添加为工作空间成员的用户显示名称。
     * @example `doctest****`
     */
    "UserName"?: string;
}
