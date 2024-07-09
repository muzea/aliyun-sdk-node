export interface GetCsrDetailResponse {
    /**
     * CSR内容。
     * @example `-----BEGIN CERTIFICATE REQUEST-----   ...... -----END CERTIFICATE REQUEST-----`
     */
    Csr: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `08F45EA0-66A7-4504-9B31-3589F5CE308D`
     */
    RequestId: string;
}
