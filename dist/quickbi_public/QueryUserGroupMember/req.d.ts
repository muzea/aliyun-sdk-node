export interface QueryUserGroupMemberRequest {
    /**
     * 用户组ID。
     * @example `2fe4fbd8-588f-489a-b3e1-e92c7af0****`
     */
    "UserGroupId": string;
    /**
     * 用户组成员用户名或昵称的关键字。
     * @example `小刘`
     */
    "Keyword"?: string;
}
