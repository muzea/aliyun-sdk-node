export interface GetSAMLProviderResponse {
    /**
     * 请求ID。
     * @example `BAADB995-0C7A-476D-B293-7E94568EEDFB`
     */
    RequestId: string;
    /**
     * 身份提供商信息。
     */
    SAMLProvider: {
        /**
         * 备注。
         * @example `This is a provider.`
         */
        Description: string;
        /**
         * 更新时间。
         * @example `2020-10-22T02:51:20Z`
         */
        UpdateDate: string;
        /**
         * 身份提供商名称。
         * @example `test-provider`
         */
        SAMLProviderName: string;
        /**
         * 创建时间。
         * @example `2020-10-22T02:37:05Z`
         */
        CreateDate: string;
        /**
         * 元数据文档。经过Base64编码。
         * @example `PD94bWwgdmVy****`
         */
        EncodedSAMLMetadataDocument: string;
        /**
         * 身份提供商的ARN。
         * @example `acs:ram::177242285274****:saml-provider/test-provider`
         */
        Arn: string;
    };
}
