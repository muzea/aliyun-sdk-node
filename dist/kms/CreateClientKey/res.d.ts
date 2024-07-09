export interface CreateClientKeyResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2312e45f-b2fa-4c34-ad94-3eca50932916`
     */
    RequestId: string;
    /**
     * ClientKey的ID。
     * @example `KAAP.66abf237-63f6-4625-b8cf-47e1086e****`
     */
    ClientKeyId: string;
    /**
     * 加密ClientKey私钥内容的算法。目前仅支持RSA_2048。
     * @example `RSA_2048`
     */
    KeyAlgorithm: string;
    /**
     * ClientKey的私钥内容。
     * @example `MIIJqwIBAzCCCXcGCSqGSIb3DQEHAaCCCWgEgglkMIIJYDCCBBcGCSqGSIb3DQEHBqCCBAgwgg******`
     */
    PrivateKeyData: string;
    /**
     * ClientKey的有效期起始时间。
     * @example `2023-08-31T17:14:33Z`
     */
    NotBefore: string;
    /**
     * ClientKey的有效期结束时间。
     * @example `2028-08-31T17:14:33Z`
     */
    NotAfter: string;
}
