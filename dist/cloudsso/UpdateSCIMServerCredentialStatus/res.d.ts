export interface UpdateSCIMServerCredentialStatusResponse {
    /**
     * 请求ID。
     * @example `7C086C2F-1C66-57B3-B14E-2C1DA70727CD`
     */
    RequestId: string;
    /**
     * SCIM密钥信息。
     */
    SCIMServerCredential: {
        /**
         * SCIM密钥状态。取值：
         * - Enabled：启用。
         * - Disabled：禁用。
         * @example `Disabled`
         */
        Status: string;
        /**
         * 目录ID。
         * @example `d-00fc2p61****`
         */
        DirectoryId: string;
        /**
         * SCIM密钥ID。
         * @example `scimcred-004whl0kvfwcypbi****`
         */
        CredentialId: string;
        /**
         * SCIM密钥的创建时间。
         * @example `2021-11-09T08:12:52Z`
         */
        CreateTime: string;
        /**
         * SCIM密钥类型。
         * @example `BearerToken`
         */
        CredentialType: string;
        /**
         * SCIM密钥的过期时间。
         * @example `2022-11-09T08:12:52Z`
         */
        ExpireTime: string;
    };
}
