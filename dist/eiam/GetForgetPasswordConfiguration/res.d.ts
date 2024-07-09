export interface GetForgetPasswordConfigurationResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 忘记密码配置。
     */
    OpenForgetPasswordConfiguration: {
        /**
         * 是否开启忘记密码，已废弃，参考使用forgetPasswordStatus参数。
         * @example `true`
         */
        Enable: boolean;
        /**
         * 表示是否开启SMS做为忘记密码的认证方法，已废弃，请参考使用authenticationChannels。
         * @example `true`
         */
        EnableSms: boolean;
        /**
         * 是否开启邮件做为忘记密码的认证方法，已废弃，请参考使用authenticationChannels。
         * @example `false`
         */
        EnableEmail: boolean;
        /**
         * 忘记密码配置状态。枚举取值:enabled(开启)、disabled(禁用)
         * @example `enabled`
         */
        ForgetPasswordStatus: string;
        /**
         * 忘记密码认证渠道列表。当forgetPasswordStatus取值为enabled时必传。枚举取值:email(邮件)、sms(短信)
         */
        AuthenticationChannels: string[];
    };
}
