export interface SetDcdnDomainCSRCertificateRequest {
    /**
     * 证书内容。该证书必须是通过[CreateDcdnCertificateSigningRequest](~~144478~~)接口创建的CSR对应的签名证书，内部必须是PEM格式的证书。
     * > 传参前先对证书Base64编码后再使用JavaScript内置函数encodeURIComponent进行编码处理。
     * @example `----BEGIN CERTIFICATE----- MIIFz****-----END CERTIFICATE-----`
     */
    "ServerCertificate": string;
    /**
     * 指定证书所属加速域名。需属于HTTPS加速类型。
     * @example `example.com`
     */
    "DomainName": string;
}
