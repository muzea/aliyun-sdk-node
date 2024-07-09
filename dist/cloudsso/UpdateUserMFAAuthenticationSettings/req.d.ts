export interface UpdateUserMFAAuthenticationSettingsRequest {
    /**
     * 用户ID。
     * @example `u-00q8wbq42wiltcrk****`
     */
    "UserId": string;
    /**
     * 用户MFA配置。取值：
     * - Enabled：为指定用户启用MFA校验。
     * - Disabled：为指定用户禁用MFA校验。
     * @example `Enabled`
     */
    "UserMFAAuthenticationSettings": string;
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
}
