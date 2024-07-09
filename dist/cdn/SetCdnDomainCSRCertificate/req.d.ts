export interface SetCdnDomainCSRCertificateRequest {
    /**
     * 证书内容。该证书必须是通过[CreateCdnCertificateSigningRequest](~~144478~~)接口创建的CSR对应的签名证书，内部必须是PEM格式的证书，Base64编码后再通过encodeURIComponent。
     * @example `----BEGIN CERTIFICATE----- MIIFz****-----END CERTIFICATE-----`
     */
    "ServerCertificate": string;
    /**
     * 要设置的加速域名，需属于HTTPS加速类型。
     * @example `example.com`
     */
    "DomainName": string;
}
