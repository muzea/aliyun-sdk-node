export interface CreateCertificateResponse {
    /**
     * 请求ID。
     * @example `15a735a1-8fe6-45cc-a64c-3c4ff839334e`
     */
    RequestId: string;
    /**
     * PEM格式的证书请求。
     * @example `-----BEGIN CERTIFICATE REQUEST-----\nMIIDADCCAegCAQAwgboxCzAJBgNVBAYTAkNOMREwDwYDVQQIEwhaaGVqaWFuZzER\n****\nmkj4rg==\n-----END CERTIFICATE REQUEST-----\n`
     */
    Csr: string;
    /**
     * 证书ID。证书管家中证书的全局唯一标识符。
     * @example `9a28de48-8d8b-484d-a766-dec4****`
     */
    CertificateId: string;
    /**
     * 证书ARN。
     * @example `acs:kms:cn-hangzhou:154035569884****:certificate/98e85c94-52d0-40c9-b3b2-afda52f4****`
     */
    Arn: string;
}
