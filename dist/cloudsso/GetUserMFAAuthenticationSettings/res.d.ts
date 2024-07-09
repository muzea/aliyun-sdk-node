export interface GetUserMFAAuthenticationSettingsResponse {
    /**
     * 请求ID。
     * @example `5B598B62-85E6-5792-9DF1-246D251B07DA`
     */
    RequestId: string;
    /**
     * 用户MFA配置。取值：
     * - Enabled：为指定用户启用MFA校验。
     * - Disabled：为指定用户禁用MFA校验。
     * @example `Enabled`
     */
    UserMFAAuthenticationSettings: string;
}
