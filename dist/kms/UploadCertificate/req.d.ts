export interface UploadCertificateRequest {
    /**
     * 证书ID。证书管家中证书的全局唯一标识符。
     * @example `12345678-1234-1234-1234-12345678****`
     */
    "CertificateId": string;
    /**
     * CA机构颁发的PEM格式的证书。
     * @example `-----BEGIN CERTIFICATE-----  (X.509 Certificate PEM Content)  -----END CERTIFICATE-----`
     */
    "Certificate": string;
    /**
     * CA机构颁发的PEM格式的证书链。
     * @example `-----BEGIN CERTIFICATE-----  (Sub CA Certificate PEM Content)  -----END CERTIFICATE-----  -----BEGIN CERTIFICATE-----  (Sub CA Certificate PEM Content)  -----END CERTIFICATE-----  -----BEGIN CERTIFICATE-----  (Root CA Certificate PEM Content)  -----END CERTIFICATE-----`
     */
    "CertificateChain"?: string;
}
