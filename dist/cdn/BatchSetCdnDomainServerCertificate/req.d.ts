export interface BatchSetCdnDomainServerCertificateRequest {
    /**
     * 指定证书所属的加速域名，属于HTTPS加速类型，多个域名用英文逗号（,）分隔。
     * > 每次最多支持配置10个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 证书名称。
     * @example `yourCertName`
     */
    "CertName"?: string;
    /**
     * 证书类型。取值：
     * - **upload**：上传证书。
     * - **cas**：证书中心证书。
     * @example `cas`
     */
    "CertType"?: string;
    /**
     * HTTPS证书是否启用。取值：
     * - **on**：启用。
     * - **off**（默认值）：不启用。
     * @example `on`
     */
    "SSLProtocol": string;
    /**
     * 安全证书内容，不启用证书则无需输入，配置证书请输入证书内容。
     * @example `yourSSLPub`
     */
    "SSLPub"?: string;
    /**
     * 私钥内容，不启用证书则无需输入，配置证书请输入私钥内容。
     * @example `yourSSLPri`
     */
    "SSLPri"?: string;
    /**
     * 地域。
     * @example `your region`
     */
    "Region"?: string;
    /**
     * 设置为1时，忽略证书名称重复的校验，覆盖原有同名证书信息。
     * @example `1`
     */
    "ForceSet"?: string;
}
