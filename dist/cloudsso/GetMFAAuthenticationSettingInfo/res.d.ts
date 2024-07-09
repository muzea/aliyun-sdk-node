export interface GetMFAAuthenticationSettingInfoResponse {
    /**
     * 请求ID。
     * @example `95D3B107-DA80-5B34-A3D0-9E82F8F0DA0E`
     */
    RequestId: string;
    /**
     * 全局MFA校验配置。
     */
    MFAAuthenticationSettingInfo: {
        /**
         * 全局MFA校验策略。取值：
         * - Enabled：为所有用户启用MFA校验。
         * - Byuser：依赖用户的独立MFA配置。关于用户MFA单独配置的详情，请参见[UpdateUserMFAAuthenticationSettings](~~450135~~)。
         * - Disabled：为所有用户禁用MFA校验。
         * - OnlyRiskyLogin：只在异常登录时验证。
         * @example `OnlyRiskyLogin`
         */
        MfaAuthenticationAdvanceSettings: string;
        /**
         * 异常登录时的MFA校验策略。取值：
         * - Autonomous：异常登录时可以跳过MFA绑定，但是已经绑定的必须验证。
         * - EnforceVerify：异常登录时强制绑定或验证MFA。
         * > 仅当MfaAuthenticationAdvanceSettings值为Byuser或OnlyRiskyLogin时显示该参数。
         * @example `EnforceVerify`
         */
        OperationForRiskLogin: string;
    };
}
