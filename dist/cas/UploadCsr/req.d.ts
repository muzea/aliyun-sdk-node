export interface UploadCsrRequest {
    /**
     * CSR名称。支持使用英文大小写字母（a~z和A~Z）、阿拉伯数字（0~9）、下划线（_）、短划线（-）。长度不超过50个字符。
     * @example `name`
     */
    "Name"?: string;
    /**
     * CSR内容。
     * @example `-----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----`
     */
    "Csr": string;
    /**
     * PEM格式的证书私钥内容。
     * @example `-----BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----`
     */
    "Key"?: string;
}
