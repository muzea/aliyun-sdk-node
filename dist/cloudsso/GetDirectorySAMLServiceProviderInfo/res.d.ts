export interface GetDirectorySAMLServiceProviderInfoResponse {
    /**
     * 请求ID。
     * @example `4632107D-BCE1-5A96-B30B-182EE0709625`
     */
    RequestId: string;
    /**
     * SP信息。
     */
    SAMLServiceProvider: {
        /**
         * SP标识。
         * @example `https://signin-cn-shanghai.alibabacloudsso.com/saml/sp/d-00fc2p61****`
         */
        EntityId: string;
        /**
         * 目录ID。
         * @example `d-00fc2p61****`
         */
        DirectoryId: string;
        /**
         * SP元数据文档（Base64编码）。
         * @example `PD94bWwgdmVyc2lv****`
         */
        EncodedMetadataDocument: string;
        /**
         * SP的ACS URL。
         * @example `https://signin-cn-shanghai.alibabacloudsso.com/saml/acs/51d298a9-2a3f-4e23-97c7-7ad1cfa9****`
         */
        AcsUrl: string;
    };
}
