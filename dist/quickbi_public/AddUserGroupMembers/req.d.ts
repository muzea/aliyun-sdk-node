export interface AddUserGroupMembersRequest {
    /**
     *  Quick BI的用户ID。
     * @example `46e5****37a5`
     */
    "UserId": string;
    /**
     * 用户组ID，以英文逗号分隔。示例：aGroupId,bGroupId,cGroupIds
     * @example `0d5fb19b-****-****-99da-1248fc27ca51`
     */
    "UserGroupIds": string;
}
