export interface GetMemberRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * @example `145883`
     */
    "WorkspaceId": string;
    /**
     * 用户UID。如何查看用户UID，请参见 [ListWorkspaceUsers](~~449133~~)。
     * UserId与MemberId必须指定一个，不能同时指定。
     * @example `21513926******88039`
     */
    "UserId"?: string;
    /**
     * 成员UID。UserId与MemberId必须指定一个，不能同时指定。
     * @example `145883-21513926******88039`
     */
    "MemberId"?: string;
}
