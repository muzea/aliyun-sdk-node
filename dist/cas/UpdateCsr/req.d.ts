export interface UpdateCsrRequest {
    /**
     * CSR唯一标识。上传CSR时会生成CsrId。您可以通过查询CSR列表获取该值，接口详情，请参见[ListCsr](~~2709717~~)。
     * @example `5209`
     */
    "CsrId": number;
    /**
     * PEM格式的证书私钥内容。
     * @example `-----BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----`
     */
    "Key": string;
}
