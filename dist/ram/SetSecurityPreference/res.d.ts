export interface SetSecurityPreferenceResponse {
    /**
     * 安全首选项。
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
         * 登录首选项。
         */
        LoginProfilePreference: {
            /**
             * 是否允许RAM用户在登录时保存多因素认证设备安全码。
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
        };
        /**
         * 公钥首选项。
         * > 该参数仅在日本站有效。
         */
        PublicKeyPreference: {
            /**
             * 是否允许RAM用户自主管理公钥。
             * @example `false`
             */
            AllowUserToManagePublicKeys: boolean;
        };
    };
    /**
     * 请求ID。
     * @example `A978915D-F279-4CA0-A89B-9A71219FFB3E`
     */
    RequestId: string;
}
