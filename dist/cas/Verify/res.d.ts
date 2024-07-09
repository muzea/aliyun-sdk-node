export interface VerifyResponse {
    /**
     * 请求ID。
     * @example `1ed33293-2e48-6b14-861e-538e28e408eb`
     */
    RequestId: string;
    /**
     * 签名校验。取值：
     * - **true**
     * - **false**
     * @example `true`
     */
    SignatureValid: boolean;
}
