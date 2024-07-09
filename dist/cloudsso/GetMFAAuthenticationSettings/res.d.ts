export interface GetMFAAuthenticationSettingsResponse {
    /**
     * 请求ID。
     * @example `A2BC00C5-76A2-5FFC-A340-927940A98377`
     */
    RequestId: string;
    /**
     * 全局MFA配置。取值：
     * - Enabled：为所有用户启用MFA校验。
     * - Byuser：依赖用户的MFA独立配置。
     * - Disabled：为所有用户禁用MFA校验。
     * @example `Enabled`
     */
    MFAAuthenticationAdvanceSettings: string;
}
