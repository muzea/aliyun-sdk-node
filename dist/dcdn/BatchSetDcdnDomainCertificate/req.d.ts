export interface BatchSetDcdnDomainCertificateRequest {
    /**
     * 指定证书所属的加速域名。需属于HTTPS加速类型，多个域名用英文逗号（,）隔开。
     * > 每次最多支持配置10个域名。
     * @example `**example**.com`
     */
    "DomainName": string;
    /**
     * 证书名称。
     * @example `cert-te**.com`
     */
    "CertName"?: string;
    /**
     * 证书类型。取值：
     * - **upload**：自定义上传证书。
     * - **cas**：云盾证书。
     * @example `cas`
     */
    "CertType"?: string;
    /**
     * 是否启用HTTPS证书。取值：
     * - **on**：启用。
     * - **off**：不启用。
     * 默认取值为**off**。
     * @example `on`
     */
    "SSLProtocol": string;
    /**
     * 安全证书内容。不启用证书则无需输入，配置证书时需输入证书内容。
     * @example `x****`
     */
    "SSLPub"?: string;
    /**
     * 私钥内容。不启用证书则无需输入，配置证书时需输入私钥内容。
     * @example `y****`
     */
    "SSLPri"?: string;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
}
