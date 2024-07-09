export interface GetLoginProfileResponse {
    /**
     * 请求ID。
     * @example `E517F18B-632C-48FC-93F1-CDCBCC6F8444`
     */
    RequestId: string;
    /**
     * 控制台登录信息。
     */
    LoginProfile: {
        /**
         * 开启或禁用控制台密码登录。
         * @example `Active`
         */
        Status: string;
        /**
         * RAM用户的登录名称。
         * @example `test@example.onaliyun.com`
         */
        UserPrincipalName: string;
        /**
         * 更新时间。
         * @example `2020-10-14T06:56:45Z`
         */
        UpdateDate: string;
        /**
         * 上次登录控制台时间。
         * @example `2020-10-14T07:25:25Z`
         */
        LastLoginTime: string;
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
