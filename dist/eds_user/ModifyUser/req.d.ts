export interface ModifyUserRequest {
    /**
     * 用户名。
     * @example `Alice`
     */
    "EndUserId": string;
    /**
     * 邮箱。
     * 如果便捷用户的类型为用户激活，需要验证邮箱或手机号码。邮箱或手机号码二选一。如果便捷账号的类型为管理员激活，邮箱和手机均可以为空。
     * @example `username@example.com`
     */
    "Email"?: string;
    /**
     * 手机号。
     * 如果便捷用户的类型为用户激活，需要验证邮箱或手机号码。邮箱或手机号码二选一。如果便捷账号的类型为管理员激活，邮箱和手机均可以为空。
     *  ><notice>国际站账号不支持手机号认证。></notice>
     * @example `1381111****`
     */
    "Phone"?: string;
}
