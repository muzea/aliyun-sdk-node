export interface ListExternalSAMLIdPCertificatesResponse {
    /**
     * 请求ID。
     * @example `400979BC-92EC-58B9-B47C-6913BD56A6FD`
     */
    RequestId: string;
    /**
     * 符合请求参数条件的数据总条数。
     * @example `1`
     */
    TotalCounts: number;
    /**
     * SAML签名证书列表。
     */
    SAMLIdPCertificates: {
        /**
         * 证书序列号。
         * @example `159289587****`
         */
        SerialNumber: string;
        /**
         * 证书颁发者。
         * @example `1.2.840.113549.1.9.1=#160d696e666f406f6b74612e63****,CN=dev-xxxxxx,OU=SSOProvider,O=Okta,L=San Francisco,ST=California,C=US`
         */
        Issuer: string;
        /**
         * 证书版本。
         * @example `3`
         */
        Version: number;
        /**
         * 证书ID。
         * @example `idp-c-00dt9gnl7fmjaw9c****`
         */
        CertificateId: string;
        /**
         * PEM格式的公钥证书（Base64编码）。
         * @example `MIIBIjANBgkqhkiG****`
         */
        PublicKey: string;
        /**
         * 证书的签名算法。
         * @example `SHA256withRSA`
         */
        SignatureAlgorithm: string;
        /**
         * 证书的过期时间。
         * @example `2030-06-23T07:04:37Z`
         */
        NotAfter: string;
        /**
         * 证书的创建时间。
         * @example `2020-06-23T07:03:37Z`
         */
        NotBefore: string;
        /**
         * 证书的主体。
         * @example `1.2.840.113549.1.9.1=#160d696e666f406f6b74612e63****,CN=dev-xxxxxx,OU=SSOProvider,O=Okta,L=San Francisco,ST=California,C=US`
         */
        Subject: string;
        /**
         * PEM格式的X509证书。
         * @example `MIIDpDCCAoygAwIBAgIG****`
         */
        X509Certificate: string;
    }[];
}
