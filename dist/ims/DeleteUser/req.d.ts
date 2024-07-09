export interface DeleteUserRequest {
    /**
     * 指定的RAM用户登录名称。
     * > `UserPrincipalName`与`UserId`参数，必须指定一个，但不能同时指定。
     * @example `test@example.onaliyun.com`
     */
    "UserPrincipalName"?: string;
    /**
     * 指定的RAM用户ID。
     * > `UserPrincipalName`与`UserId`参数，必须指定一个，但不能同时指定。
     * @example `20732900249392****`
     */
    "UserId"?: string;
}
