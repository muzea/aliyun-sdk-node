export interface UploadUserCertificateRequest {
    /**
     * 自定义的证书名称。支持的最大字符长度：128。支持所有字符类型，包括字母、数字、下划线等。
     * > 同一个用户下的证书名称不能重复。
     * @example `cert-1`
     */
    "Name"?: string;
    /**
     * 非国密证书，PEM格式证书内容。
     * @example `-----BEGIN CERTIFICATE----- MIIF...... -----END CERTIFICATE-----`
     */
    "Cert"?: string;
    /**
     * 非国密证书 ，PEM格式证书的私钥内容。
     * @example `-----BEGIN CERTIFICATE-----
    MIICDzCCAbagAw****
    -----END CERTIFICATE-----`
     */
    "Key"?: string;
    /**
     * 国密证书，PEM格式加密证书内容。当Cert和Key不为空时，此字段无效。
     * @example `-----BEGIN CERTIFICATE-----
    MIICDzCCA***
    -----END CERTIFICATE-----`
     */
    "EncryptCert"?: string;
    /**
     * 国密证书，PEM格式加密证书私钥内容。当Cert和Key不为空时，此字段无效。
     * @example `-----BEGIN EC PRIVATE KEY-----
    MHcCAQEEI****
    -----END EC PRIVATE KEY-----`
     */
    "EncryptPrivateKey"?: string;
    /**
     * 国密证书，PEM格式签名证书内容。当Cert和Key不为空时，此字段无效。
     * @example `-----BEGIN CERTIFICATE-----
    MIICDzCCAbagAw****
    -----END CERTIFICATE-----
    `
     */
    "SignCert"?: string;
    /**
     * 国密证书，PEM格式签名证书私钥内容。当Cert和Key不为空时，此字段无效。
     * @example `-----BEGIN EC PRIVATE KEY-----
    MHcCAQEEILR****
    -----END EC PRIVATE KEY-----
    `
     */
    "SignPrivateKey"?: string;
    /**
     * 资源分组ID。
     * @example `rg-ae****vty`
     */
    "ResourceGroupId"?: string;
}
