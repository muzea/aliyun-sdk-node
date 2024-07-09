export interface ListUserRolesRequest {
    /**
     * ram user/ram role principal，格式为acs:ram::[accountId]:user/userName, acs:ram::[accountId]:role/roleName
     * @example `acs:ram::1111:user/userName`
     */
    "PrincipalArn"?: string;
    /**
     * PageSize
     * @example `-1/100`
     */
    "PageSize"?: number;
    /**
     * role name pattern filter
     * @example `.*test.*`
     */
    "RoleNamePattern"?: string;
    /**
     * 翻页token
     * @example `token!`
     */
    "NextPageToken"?: string;
}
