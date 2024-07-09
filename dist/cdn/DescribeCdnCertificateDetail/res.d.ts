export interface DescribeCdnCertificateDetailResponse {
    /**
     * 证书名称。
     * @example `cert-15480655xxxx`
     */
    CertName: string;
    /**
     * 证书KEY。
     * @example `xxxx`
     */
    Key: string;
    /**
     * 证书。
     * @example `-----BEGIN CERTIFICATE-----\nMIIFzDCCBLSgAwIBxxxx`
     */
    Cert: string;
    /**
     * 证书ID。
     * @example `881049`
     */
    CertId: number;
    /**
     * 请求ID。
     * @example `0AEDAF20-4DDF-4165-8750-47FF9C1929C9`
     */
    RequestId: string;
}
