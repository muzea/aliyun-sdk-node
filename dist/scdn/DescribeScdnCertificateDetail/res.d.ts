export interface DescribeScdnCertificateDetailResponse {
    /**
     * 证书名称
     * @example `vmeixme`
     */
    CertName: string;
    /**
     * 证书Key值
     * @example `key`
     */
    Key: string;
    /**
     * 证书内容
     * @example `-----BEGIN CERTIFICATE-----xxx-----END CERTIFICATE-----`
     */
    Cert: string;
    /**
     * 证书ID
     * @example `123`
     */
    CertId: number;
    /**
     * 请求ID
     * @example `C7C69682-7F88-40DD-A198-10D0309E439B`
     */
    RequestId: string;
}
