export interface DescribeDcdnCertificateDetailResponse {
    /**
     * 证书名称。
     * @example `123`
     */
    CertName: string;
    /**
     * 证书key。
     * @example `ak1htyxxxx`
     */
    Key: string;
    /**
     * 证书内容。
     * @example `-----BEGIN CERTIFICATE-----xxx-----END CERTIFICATE-----`
     */
    Cert: string;
    /**
     * 证书ID。
     * @example `123`
     */
    CertId: number;
    /**
     * 请求ID。
     * @example `C7C69682-7F88-40DD-A198-10D0309E439B`
     */
    RequestId: string;
}
