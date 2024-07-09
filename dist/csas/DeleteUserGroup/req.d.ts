export interface DeleteUserGroupRequest {
    /**
     * 用户组ID。取值来源：
     * - [ListUserGroups](~~ListUserGroups~~)：批量查询用户组。
     * - [CreateUserGroup](~~CreateUserGroup~~)：创建用户组。
     * @example `usergroup-6f1ef2fc56b6****`
     */
    "UserGroupId": string;
}
