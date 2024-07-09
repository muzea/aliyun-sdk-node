export interface AddUserToGroupRequest {
    /**
     * RAM用户的登录名称。
     * @example `test@example.onaliyun.com`
     */
    "UserPrincipalName": string;
    /**
     * 用户组名称。
     * @example `Test-Team`
     */
    "GroupName"?: string;
}
