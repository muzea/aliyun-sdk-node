export interface DescribeCdnSMCertificateDetailResponse {
    /**
     * 证书到期时间，GMT时间。
     * @example `2022-08-31T09:42:28Z`
     */
    CertExpireTime: string;
    /**
     * 证书ID。
     * @example `648****-cn-hangzhou`
     */
    CertIdentifier: string;
    /**
     * 请求ID。
     * @example `A7C69682-7F88-40DD-A198-10D0309E439D`
     */
    RequestId: string;
    /**
     * 通用域名。
     * @example `example.com`
     */
    CommonName: string;
    /**
     * 证书名称。
     * @example `yourCertName`
     */
    CertName: string;
    /**
     * 扩展域名。
     * @example `***.example.com`
     */
    Sans: string;
    /**
     * 签名证书内容。
     * @example `--BEGIN CERTIFICATE-----***-----END CERTIFICATE--`
     */
    SignCertificate: string;
    /**
     * 证书颁发机构。
     * @example `DigiCert Inc`
     */
    CertOrg: string;
    /**
     * 加密证书内容。
     * @example `-BEGIN CERTIFICATE-----***-----END CERTIFICATE--`
     */
    EncryptCertificate: string;
}
