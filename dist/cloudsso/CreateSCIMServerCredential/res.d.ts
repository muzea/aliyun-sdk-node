export interface CreateSCIMServerCredentialResponse {
    /**
     * 请求ID。
     * @example `2D2E5180-7ACF-57FF-A56C-26A49ABEBFF7`
     */
    RequestId: string;
    /**
     * SCIM密钥信息。
     */
    SCIMServerCredential: {
        /**
         * SCIM密钥状态。取值：Enabled，表示启用状态。
         * @example `Enabled`
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
        /**
         * SCIM密钥。
         * > SCIM密钥仅在创建时返回，后续不支持查询，请妥善保存。
         * @example `8aAJCtpbyPJ8saXeYDgyw****`
         */
        CredentialSecret: string;
    };
}
