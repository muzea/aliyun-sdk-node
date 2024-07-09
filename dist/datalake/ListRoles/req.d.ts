export interface ListRolesRequest {
    /**
     * Next PageToken
     * @example `token!`
     */
    "NextPageToken"?: string;
    /**
     * 支持模糊搜索，比如.\*test.\*
     * @example `.*test.*`
     */
    "RoleNamePattern"?: string;
    /**
     * 分页大小
     * @example `-1/100`
     */
    "PageSize"?: number;
}
