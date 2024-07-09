export interface CreateSAMLProviderResponse {
    /**
     * 请求ID。
     * @example `请求ID。`
     */
    RequestId: string;
    /**
     * 身份提供商信息。
     */
    SAMLProvider: {
        /**
         * 更新时间（UTC时间）。
         * @example `2020-10-22T02:51:20Z`
         */
        UpdateDate: string;
        /**
         * 备注。
         * @example `This is a provider.`
         */
        Description: string;
        /**
         * 身份提供商名称。
         * @example `test-provider`
         */
        SAMLProviderName: string;
        /**
         * 创建时间（UTC时间）。
         * @example `2020-10-22T02:37:05Z`
         */
        CreateDate: string;
        /**
         * 身份提供商的ARN。
         * @example `acs:ram::177242285274****:saml-provider/test-provider`
         */
        Arn: string;
    };
}
