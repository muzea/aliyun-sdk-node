export interface SetVodDomainCertificateRequest {
    /**
     * 指定证书所属加速域名。需属于HTTPS加速类型。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 证书名称。
     * @example `cert_name`
     */
    "CertName"?: string;
    /**
     * HTTPS证书是否启用。取值：
     * - **on**：启用。
     * - **off**（默认值）：不启用。
     * @example `off`
     */
    "SSLProtocol": string;
    /**
     * 安全证书内容。不启用证书则无需输入，配置证书请输入证书内容。
     * @example `****`
     */
    "SSLPub"?: string;
    /**
     * 私钥内容。不启用证书则无需输入，配置证书请输入私钥内容。
     * @example `****`
     */
    "SSLPri"?: string;
}
