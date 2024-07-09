export interface UpdateLoginProfileResponse {
    /**
     * 请求ID。
     * @example `BCDB6A7F-2199-41D9-B577-4FA536A5ADE1`
     */
    RequestId: string;
    /**
     * 控制台登录信息。
     */
    LoginProfile: {
        /**
         * RAM用户的登录名称。
         * @example `test@example11.onaliyun.com`
         */
        UserPrincipalName: string;
        /**
         * 开启或禁用控制台密码登录。
         * @example `Active`
         */
        Status: string;
        /**
         * 更新时间。
         * @example `2020-10-14T07:48:41Z`
         */
        UpdateDate: string;
        /**
         * RAM用户在下次登录时是否必须重置密码。
         * @example `false`
         */
        PasswordResetRequired: boolean;
        /**
         * 是否强制要求用户开启多因素认证。
         * @example `false`
         */
        MFABindRequired: boolean;
    };
}
