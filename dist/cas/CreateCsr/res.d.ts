export interface CreateCsrResponse {
    /**
     * CSR内容。
     * @example `-----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----`
     */
    Csr: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `12345678-1234-1234-1234-123456789ABC`
     */
    RequestId: string;
    /**
     * CSR唯一标识。后续可通过该值直接获取CSR内容。获取CSR的接口请参见[GetCsrDetail](~~2709720~~)。
     * @example `3365`
     */
    CsrId: number;
}
