export interface AddExternalSAMLIdPCertificateRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * PEM格式的X509证书。
     * 由SAML身份提供商提供。
     * @example `MIIC8DCCAdigAwIBAgIQP9eomUYGeoND****`
     */
    "X509Certificate": string;
}
