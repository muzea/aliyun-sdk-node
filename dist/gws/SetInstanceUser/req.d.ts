export interface SetInstanceUserRequest {
    /**
     * 实例 id
     * @example `i-xxx`
     */
    "InstanceId": string;
    /**
     * 用户 id
     * @example `1234`
     */
    "UserUid": number;
    /**
     * 用户名。
     * @example `user_xxx`
     */
    "UserName": string;
}
