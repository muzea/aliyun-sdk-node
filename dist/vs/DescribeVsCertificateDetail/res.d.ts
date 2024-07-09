export interface DescribeVsCertificateDetailResponse {
    /**
     * 证书名称
     * @example `cert-539xxxxx`
     */
    CertName: string;
    /**
     * 密钥。
     * @example `xxxxx`
     */
    Key: string;
    /**
     * 证书内容
     * @example `-----BEGIN CERTIFICATE-----xxxxx-----END CERTIFICATE-----`
     */
    Cert: string;
    /**
     * 证书id
     * @example `63000000`
     */
    CertId: number;
    /**
     * 本次操作请求ID
     * @example `D94D0E1E-E71B-562D-8C18-969BB3653FBD`
     */
    RequestId: string;
}
