export interface SetCdnDomainSMCertificateRequest {
    /**
     * 证书所属的加速域名。
     * > 证书需属于HTTPS加速类型。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 国密证书ID。
     * 证书ID+"-cn-hangzhou"。
     * 如果证书ID=123，CertIdentifier="123-cn-hangzhou"
     * @example `1234****-cn-hangzhou`
     */
    "CertIdentifier": string;
    /**
     * HTTPS证书是否启用。取值：
     * - **on**：启用。
     * - **off**：不启用。
     * @example `on`
     */
    "SSLProtocol": string;
}
