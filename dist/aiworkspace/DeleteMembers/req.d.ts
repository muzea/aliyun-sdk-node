export interface DeleteMembersRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * @example `145883`
     */
    "WorkspaceId": string;
    /**
     * 成员ID列表，多个成员ID以半角逗号（,）分隔。如何获取成员ID，请参见[ListMembers](~~449135~~)。
     * @example `145883-21513926******88039,145883-2769726******87513`
     */
    "MemberIds": string;
}
