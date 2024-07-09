export interface SetDcdnDomainCertificateRequest {
    /**
     * 加速域名，仅支持单个设置。
     * 加速域名需属于HTTPS加速类型。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 证书名称。
     * @example `yourCertName`
     */
    "CertName"?: string;
    /**
     * 证书类型。
     * - **upload**：上传证书。
     * - **cas**：证书中心证书。
     * >证书类型取值为**cas**时，**SSLPri**无需传参。
     * @example `cas`
     */
    "CertType"?: string;
    /**
     * HTTPS证书是否启用。
     * - **on**：启用。
     * - **off**（默认值）：不启用。
     * @example `on`
     */
    "SSLProtocol": string;
    /**
     * 安全证书内容。不启用证书则无需输入，配置证书请输入证书内容。
     * @example `SSLPub`
     */
    "SSLPub"?: string;
    /**
     * 私钥内容。不启用证书则无需输入，配置证书请输入私钥内容。
     * @example `SSLPri`
     */
    "SSLPri"?: string;
    /**
     * 地区信息，默认ch-hangzhou。
     * @example `cn-shanghai`
     */
    "Region"?: string;
    /**
     * 设置为1时，忽略证书名称重复的校验，覆盖原有同名证书信息。
     * @example `1`
     */
    "ForceSet"?: string;
}
