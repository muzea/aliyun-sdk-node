export interface SetSecurityPreferenceResponse {
    /**
     * 安全首选项信息。
     */
    SecurityPreference: {
        /**
         * 访问密钥首选项。
         */
        AccessKeyPreference: {
            /**
             * 是否允许RAM用户自主管理访问密钥。
             * @example `false`
             */
            AllowUserToManageAccessKeys: boolean;
        };
        /**
         * 登录首选项。
         */
        LoginProfilePreference: {
            /**
             * RAM用户使用多因素认证登录后，是否允许保存多因素认证的验证状态，其有效期为7天。
             * @example `false`
             */
            EnableSaveMFATicket: boolean;
            /**
             * RAM用户登录有效期。
             * @example `6`
             */
            LoginSessionDuration: number;
            /**
             * 登录掩码。
             * @example `10.0.0.0/8`
             */
            LoginNetworkMasks: string;
            /**
             * 是否允许RAM用户自主管理密码。
             * @example `true`
             */
            AllowUserToChangePassword: boolean;
            /**
             * 异常登录时是否二次验证MFA。
             * @example `autonomous`
             */
            OperationForRiskLogin: string;
            /**
             * 登录时必须使用MFA（取代原EnforceMFAForLogin参数，原参数仍然有效，建议更新为新参数）。
             * @example `adaptive`
             */
            MFAOperationForLogin: string;
        };
        /**
         * 多因素认证首选项。
         */
        MFAPreference: {
            /**
             * 是否允许RAM用户自主管理多因素认证设备。
             * @example `false`
             */
            AllowUserToManageMFADevices: boolean;
        };
        /**
         * 多因素认证手段的首选项。
         */
        VerificationPreference: {
            /**
             * 多因素认证的手段。
             */
            VerificationTypes: string[];
        };
        /**
         * 个人信息首选项。
         */
        PersonalInfoPreference: {
            /**
             * 是否允许RAM用户自主管理个人钉钉的绑定与解绑。
             * @example `true`
             */
            AllowUserToManagePersonalDingTalk: boolean;
        };
    };
    /**
     * 请求ID。
     * @example `17494710-B4BA-4185-BBBB-C1A6ABDE1639`
     */
    RequestId: string;
}
