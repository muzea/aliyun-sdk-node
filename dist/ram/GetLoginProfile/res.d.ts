export interface GetLoginProfileResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 登录配置信息。
     */
    LoginProfile: {
        /**
         * 要求下次登录时重设密码。
         * @example `true`
         */
        PasswordResetRequired: boolean;
        /**
         * 创建时间。
         * @example `2015-01-23T12:33:18Z`
         */
        CreateDate: string;
        /**
         * 用户名。
         * @example `zhangq****`
         */
        UserName: string;
        /**
         * 要求必须绑定多因素认证设备。
         * @example `true`
         */
        MFABindRequired: boolean;
    };
}
