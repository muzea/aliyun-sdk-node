export interface SetMFAAuthenticationStatusRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * MFA启用状态。取值：
     * - Enabled：启用。
     * - Disabled：禁用。
     * @example `Enabled`
     */
    "MFAAuthenticationStatus"?: string;
}
