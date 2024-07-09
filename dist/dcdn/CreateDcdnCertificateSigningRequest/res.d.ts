export interface CreateDcdnCertificateSigningRequestResponse {
    /**
     * 请求ID。
     * @example `0AEDAF20-4DDF-4165-8750-47FF9C1929C9`
     */
    RequestId: string;
    /**
     * 证书公钥信息Md5值。
     * @example `629bf4fd8104eda171135bcb0f77a10b`
     */
    PubMd5: string;
    /**
     * 证书签名请求文件内容。
     * @example `-----BEGIN CERTIFICATE REQUEST-----\nMIIC/zCCAecCAQAwZTELMAkGA1UEBhMCQ04xCzAJBgNVBAgTAlpKMQswCQYDVQQH`
     */
    Csr: string;
    /**
     * 证书通用名称。
     * @example `example.com`
     */
    CommonName: string;
}
