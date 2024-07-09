export interface CreateLoginProfileResponse {
    /**
     * 请求ID。
     * @example `29CB303C-1F05-43A6-A6BC-EBC5A797F8DB`
     */
    RequestId: string;
    /**
     * 控制台登录信息。
     */
    LoginProfile: {
        /**
         * RAM用户的登录名称。
         * @example `test@example.onaliyun.com`
         */
        UserPrincipalName: string;
        /**
         * 开启或禁用控制台密码登录。
         * @example `Active`
         */
        Status: string;
        /**
         * 更新时间。
         * @example `2020-10-14T03:47:51Z`
         */
        UpdateDate: string;
        /**
         * RAM用户在下次登录时是否必须重置密码。
         * @example `false`
         */
        PasswordResetRequired: boolean;
        /**
         * 是否强制要求RAM用户开启多因素认证。
         * @example `false`
         */
        MFABindRequired: boolean;
    };
}
