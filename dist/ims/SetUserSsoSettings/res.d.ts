export interface SetUserSsoSettingsResponse {
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
         * @example `true`
         */
        SsoEnabled: boolean;
    };
    /**
     * 请求ID。
     * @example `87F2E3F6-28A0-43F3-A77F-F7760E62F61E`
     */
    RequestId: string;
}
