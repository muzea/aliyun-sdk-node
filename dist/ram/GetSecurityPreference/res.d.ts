export interface GetSecurityPreferenceResponse {
    /**
     * 安全首选项。
     */
    SecurityPreference: {
        /**
         * 访问密钥首选项。
         */
        AccessKeyPreference: {
            /**
             * 是否允许用户自主管理访问密钥。取值：
             * - true：允许。
             * - false：不允许。
             * @example `false`
             */
            AllowUserToManageAccessKeys: boolean;
        };
        /**
         * 多因素认证首选项。
         */
        MFAPreference: {
            /**
             * 是否允许RAM用户自主管理多因素认证设备。取值：
             * - true：允许。
             * - false：不允许。
             * @example `true`
             */
            AllowUserToManageMFADevices: boolean;
        };
        /**
         * 登录首选项。
         */
        LoginProfilePreference: {
            /**
             * 是否允许RAM用户登录时保存多因素认证设备安全码，安全码有效期为7天。取值：
             * - true：允许。
             * - false：不允许。
             * @example `false`
             */
            EnableSaveMFATicket: boolean;
            /**
             * RAM用户登录有效期。单位：小时。
             * @example `6`
             */
            LoginSessionDuration: number;
            /**
             * 登录掩码。登录掩码决定哪些IP地址会受到登录控制台的影响，包括密码登录和SSO登录，但使用AccessKey发起的API访问并不受影响。
             * - 如果指定掩码，RAM用户只能从指定的IP地址进行登录。
             * - 如果不指定任何掩码，登录控制台功能将适用于整个网络。
             * 当需要配置多个登录掩码时，请使用分号（;）来分隔登录掩码，例如：192.168.0.0/16;10.0.0.0/8。
             * @example `10.0.0.0/8`
             */
            LoginNetworkMasks: string;
            /**
             * 是否允许RAM用户自主管理密码。取值：
             * - true：允许。
             * - false：不允许。
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
             * 是否允许RAM用户自主管理公钥。取值：
             * - true：允许。
             * - false：不允许。
             * @example `false`
             */
            AllowUserToManagePublicKeys: boolean;
        };
    };
    /**
     * 请求ID。
     * @example `DC1213F1-A9D5-4A01-A996-44983689126C`
     */
    RequestId: string;
}
