export interface GetUserSsoSettingsResponse {
    /**
     * 用户SSO配置信息。
     */
    UserSsoSettings: {
        /**
         * 辅助域名。
         * @example `example.com`
         */
        AuxiliaryDomain: string;
        /**
         * 元数据文档。经过Base64编码。
         * @example `PD94bWwgdmVy****`
         */
        MetadataDocument: string;
        /**
         * 是否开启用户SSO。
         * @example `false`
         */
        SsoEnabled: boolean;
    };
    /**
     * 请求ID。
     * @example `69FC3E5E-D3D9-434B-90CA-BBA8E0551A47`
     */
    RequestId: string;
}
