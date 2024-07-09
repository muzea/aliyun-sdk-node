export interface GetCertificateResponse {
    /**
     * PEM格式的证书链。
     * @example `-----BEGIN CERTIFICATE-----  (Sub CA Certificate PEM Content)  -----END CERTIFICATE-----  -----BEGIN CERTIFICATE-----  (Sub CA Certificate PEM Content)  -----END CERTIFICATE-----  -----BEGIN CERTIFICATE-----  (Root CA Certificate PEM Content)  -----END CERTIFICATE-----`
     */
    CertificateChain: string;
    /**
     * PEM格式的证书。
     * @example `-----BEGIN CERTIFICATE-----  (X.509 Certificate PEM Content)  -----END CERTIFICATE-----`
     */
    Certificate: string;
    /**
     * 请求ID。
     * @example `b3e104b4-0319-4a20-ab7f-9fef6****`
     */
    RequestId: string;
    /**
     * 证书ID。
     * @example `9a28de48-8d8b-484d-a766-dec4****`
     */
    CertificateId: string;
    /**
     * PEM格式的证书请求。
     * @example `-----BEGIN CERTIFICATE REQUEST-----MIICxjCCAa4CAQAwPzELMAkGA1UEBhMCQ04xDzANBgNVBAoTBmFsaXl1bjEMMAoGA1UECxMDa21zMREwDwY****-----END CERTIFICATE REQUEST-----`
     */
    Csr: string;
}
