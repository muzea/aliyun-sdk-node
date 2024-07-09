export interface GetAuthorizationTokenResponse {
    /**
     * 请求ID
     * @example `E069EB86-E6AD-4A98-ADDE-0E993390239A`
     */
    RequestId: string;
    /**
     * 临时 Token 的过期时间戳，单位为 ms
     * @example `1571242083000`
     */
    ExpireTime: number;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 用于登录 Registry 的用户名
     * @example `temp_user_cr`
     */
    TempUsername: string;
    /**
     * 用于登录 Registry 的密码
     * @example `shaunadadakks:uuczxnjcyeyhdjadkkajsjdjadhyucb`
     */
    AuthorizationToken: string;
}
