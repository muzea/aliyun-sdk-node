export interface RemoveUserFromGroupRequest {
    /**
     * RAM用户的登录名称。
     * @example `alice@example.onaliyun.com`
     */
    "UserPrincipalName": string;
    /**
     * 用户组名称。
     * @example `Test-Team`
     */
    "GroupName"?: string;
}
