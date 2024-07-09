export interface UpdateMFAAuthenticationSettingsRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 全局MFA配置。取值：
     * - Enabled：为所有用户启用MFA校验。
     * - Byuser：依赖用户的MFA独立配置。关于用户MFA单独配置的详情，请参见[UpdateUserMFAAuthenticationSettings](~~450135~~)。
     * - Disabled：为所有用户禁用MFA校验。
     * - OnlyRiskyLogin：只在异常登录时验证。
     * @example `Enabled`
     */
    "MFAAuthenticationSettings": string;
    /**
     * 当登录是否进行多因素配置选项值是只在异常登录时验证时。取值：
     * Autonomous：异常登录时可以跳过绑定MFA, 但是已经绑定的必须验证MFA。
     * EnforceVerify：未绑定MFA时需要强制绑定，已绑定的需验证。
     * @example `Autonomous`
     */
    "OperationForRiskLogin"?: string;
}
