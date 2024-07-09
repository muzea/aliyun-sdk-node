export interface UpdateHttpTriggerConfigRequest {
    /**
     * 设置是否开启HTTP触发功能。取值：
     * - **true**：表示开启HTTP触发功能。
     * - **false**：表示关闭HTTP触发功能。
     * @example `true`
     */
    "EnableService": boolean;
    /**
     * 服务空间ID。
     * @example `34C45988-2B24-****-A4DC-4D6C952890D8`
     */
    "SpaceId": string;
    /**
     * 自定义域名。不传该字段表示不更新自定义域名，设置为空字符串表示删除自定义域名。
     * 在绑定自定义域名前，要求您的域名已经接入阿里云备案，并且已配置解析CNAME到CustomDomainCname。
     * @example `abc.xxx.com`
     */
    "CustomDomain"?: string;
    /**
     * 自定义域名的HTTPS证书。必须和CustomDomainPrivateKey一起使用，不传这两个字段表示不更新证书，都传空字符串表示删除证书。
     * @example `-----BEGIN CERTIFICATE----- MIIFK****GCSqGSIb3DQEBCwUA= -----END CERTIFICATE-----`
     */
    "CustomDomainCertificate"?: string;
    /**
     * 自定义域名的HTTPS证书的私钥。必须和CustomDomainCertificate一起使用，不传这两个字段表示不更新证书，都传空字符串表示删除证书。
     * @example `-----BEGIN PRIVATE KEY----- MIIEwA******DmUwVD0M74ECwZw= -----END PRIVATE KEY-----`
     */
    "CustomDomainPrivateKey"?: string;
}
