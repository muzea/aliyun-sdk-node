export interface UpdateCertificateStatusRequest {
    /**
     * 证书ID。证书管家中证书的全局唯一标识符。
     * @example `9a28de48-8d8b-484d-a766-dec4****`
     */
    "CertificateId": string;
    /**
     * 证书的状态，取值：
     * - INACTIVE：已禁用。
     * - ACTIVE：已启用。
     * - REVOKED：已吊销。
     *
     * > 当证书状态为REVOKED（已吊销）时，不能进行签名操作，只能进行验签操作。
     * @example `INACTIVE`
     */
    "Status": string;
}
