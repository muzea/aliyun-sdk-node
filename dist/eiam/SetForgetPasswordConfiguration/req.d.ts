export interface SetForgetPasswordConfigurationRequest {
    /**
     * 实例ID。
     * @example `eiam-111ccc1111`
     */
    "InstanceId": string;
    /**
     * 忘记密码配置状态。枚举取值:enabled(开启)、disabled(禁用)
     * @example `enabled`
     */
    "ForgetPasswordStatus": string;
    /**
     * 身份认证渠道列表。枚举取值:email(邮件)、sms(短信)
     * @example `email`
     */
    "AuthenticationChannels"?: string[];
}
