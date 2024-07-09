export interface UpdateSAMLProviderResponse {
    /**
     * 请求ID。
     * @example `E5EDDFD2-3654-4F9F-9780-4AE7D81823EF`
     */
    RequestId: string;
    /**
     * 身份提供商信息。
     */
    SAMLProvider: {
        /**
         * 身份提供商的修改时间（UTC时间）。
         * @example `2020-10-22T02:51:20Z`
         */
        UpdateDate: string;
        /**
         * 备注。
         * @example `This is a new provider.`
         */
        Description: string;
        /**
         * 身份提供商名称。
         * @example `test-provider`
         */
        SAMLProviderName: string;
        /**
         * 身份提供商的创建时间（UTC时间）。
         * @example `2020-10-22T02:37:05Z`
         */
        CreateDate: string;
        /**
         * 身份提供商ARN。
         * @example `acs:ram::177242285274****:saml-provider/test-provider`
         */
        Arn: string;
    };
}
