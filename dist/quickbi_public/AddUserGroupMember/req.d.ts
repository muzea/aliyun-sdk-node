export interface AddUserGroupMemberRequest {
    /**
     * 用户组ID。
     * @example `555c4cd****`
     */
    "UserGroupId": string;
    /**
     * Quick BI的用户ID，可输入多个，以英文逗号（,）分隔，例如：abc,efg。最多可输入1000条。
     * @example `46e537a5****,3dadsu****`
     */
    "UserIdList": string;
}
