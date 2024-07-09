export interface ListSCIMServerCredentialsResponse {
    /**
     * 请求ID。
     * @example `FE4B7037-C315-5DD5-826E-57A87950BCD1`
     */
    RequestId: string;
    /**
     * 符合请求参数条件的数据总条数。
     * @example `1`
     */
    TotalCounts: number;
    /**
     * SCIM密钥列表。
     */
    SCIMServerCredentials: {
        /**
         * SCIM密钥状态。取值：
         * - Enabled：启用。
         * - Disabled：禁用。
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
    }[];
}
