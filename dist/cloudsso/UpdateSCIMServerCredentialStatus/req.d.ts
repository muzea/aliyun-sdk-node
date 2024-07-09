export interface UpdateSCIMServerCredentialStatusRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * SCIM密钥ID。
     * @example `scimcred-004whl0kvfwcypbi****`
     */
    "CredentialId": string;
    /**
     * SCIM密钥状态。取值：
     * - Enabled：启用。
     * - Disabled：禁用。
     * @example `Disabled`
     */
    "NewStatus"?: string;
}
