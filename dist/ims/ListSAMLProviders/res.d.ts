export interface ListSAMLProvidersResponse {
    /**
     * 请求ID。
     * @example `2D8B70D3-E194-41C9-93C5-F6A10D716D24`
     */
    RequestId: string;
    SAMLProviders: {
        /**
         * 身份提供商信息。
         */
        SAMLProvider: {
            /**
             * 更新时间。
             * @example `2020-10-22T06:26:15Z`
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
             * 创建时间。
             * @example `2020-10-22T06:26:15Z`
             */
            CreateDate: string;
            /**
             * 身份提供商的ARN。
             * @example `acs:ram::177242285274****:saml-provider/test-provider`
             */
            Arn: string;
        }[];
    };
    /**
     * 请求返回结果是否被截断。取值：
     * - true
     * - false
     * @example `true`
     */
    IsTruncated: boolean;
    /**
     * 当`IsTruncated`为`true`时才有此参数，当返回`true`时，需要继续调用此接口，并且使用`Marker`获取截断后的内容 。
     * @example `EXAMPLE`
     */
    Marker: string;
}
