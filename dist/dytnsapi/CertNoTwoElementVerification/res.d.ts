export interface CertNoTwoElementVerificationResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `-`
     */
    AccessDeniedDetail: string;
    /**
     * 请求ID。
     * @example `CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47`
     */
    RequestId: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 验证结果是否一致。返回：
         * - **1**：一致
         * - **0**：不一致
         * - **2**：查无
         * @example `1`
         */
        IsConsistent: string;
    };
    /**
     * 请求状态码。
     * @example `OK`
     */
    Code: string;
}
