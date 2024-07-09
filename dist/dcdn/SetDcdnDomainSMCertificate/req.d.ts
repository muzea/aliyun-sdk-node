export interface SetDcdnDomainSMCertificateRequest {
    /**
     * 指定国密证书所属的加速域名。
     * >加速域名需属于HTTPS加速类型。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 证书ID+"-cn-hangzhou"。如果证书ID=123，则CertIdentifier=“123-cn-hangzhou”。
     * @example `123-cn-hangzhou`
     */
    "CertIdentifier": string;
    /**
     * HTTPS证书是否启用。
     * - **on**：启用。
     * - **off**：不启用。
     * @example `on`
     */
    "SSLProtocol": string;
}
