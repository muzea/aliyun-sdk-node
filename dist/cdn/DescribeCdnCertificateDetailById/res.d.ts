export interface DescribeCdnCertificateDetailByIdResponse {
    /**
     * 证书名称。
     * @example `yourCertName
    `
     */
    CertName: string;
    /**
     * 证书公钥。
     * @example `587f6db37e3a2f01047b032b739cbe31
    `
     */
    Key: string;
    /**
     * 证书内容。
     * @example `-----BEGINCERTIFICATE-----xxx-----END CERTIFICATE-----
    `
     */
    Cert: string;
    /**
     * 证书ID。
     * @example `12345`
     */
    CertId: number;
    /**
     * 请求ID。
     * @example `C370DAF1-C838-4288-A1A0-9A87633D248E
    `
     */
    RequestId: string;
}
