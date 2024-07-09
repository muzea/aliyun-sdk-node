export interface DescribeLiveCertificateDetailResponse {
    /**
     * 证书名称。
     * @example `Cert-****`
     */
    CertName: string;
    /**
     * 证书内容。
     * @example `-----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----`
     */
    Cert: string;
    /**
     * 请求ID。
     * @example `C7C69682-7F88-40DD-A198-10D0309E439B`
     */
    RequestId: string;
    /**
     * 证书ID。
     * @example `23451111`
     */
    CertId: number;
}
