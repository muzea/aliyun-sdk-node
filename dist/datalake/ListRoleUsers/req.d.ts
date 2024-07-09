export interface ListRoleUsersRequest {
    /**
     * 角色名称
     * @example `admin`
     */
    "RoleName"?: string;
    /**
     * PageSize
     * @example `-1/100`
     */
    "PageSize"?: number;
    /**
     * use name pattern filter
     * @example `.*user.*`
     */
    "UserNamePattern"?: string;
    /**
     * NextPageToken
     * @example `token!`
     */
    "NextPageToken"?: string;
}
