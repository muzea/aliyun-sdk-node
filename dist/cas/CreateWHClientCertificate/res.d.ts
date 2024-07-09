export interface CreateWHClientCertificateResponse {
    /**
     * 客户端证书的唯一识别码。
     * @example `190ae6bb538d538c70c01f81dcf2****`
     */
    Identifier: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8C467B38-3910-447D-87BC-AC049166F216`
     */
    RequestId: string;
    /**
     * 根CA证书的内容。
     * @example `-----BEGIN CERTIFICATE-----\n......\n-----END CERTIFICATE-----`
     */
    RootX509Certificate: string;
    /**
     * 子CA证书的内容。
     * @example `-----BEGIN CERTIFICATE-----\n......\n-----END CERTIFICATE-----`
     */
    ParentX509Certificate: string;
    /**
     * 客户端证书的内容。
     * @example `-----BEGIN CERTIFICATE-----\n......\n-----END CERTIFICATE-----`
     */
    X509Certificate: string;
    /**
     * CA证书链。
     * @example `-----BEGIN CERTIFICATE-----\n......\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\n......\n-----END CERTIFICATE-----\n`
     */
    CertificateChain: string;
}
