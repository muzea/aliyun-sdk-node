export interface ListSystemSecurityPoliciesResponse {
    /**
     * 请求ID。
     * @example `A9B4E54C-9CCD-4002-91A9-D38C6C209192`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 安全策略列表.
     */
    SecurityPolicies: {
        /**
         * 安全策略ID。
         * @example `tls_cipher_policy_1_1`
         */
        SecurityPolicyId: string;
        /**
         * 支持的TLS协议版本，取值：**TLSv1.0**、**TLSv1.1**、**TLSv1.2**和**TLSv1.3**。
         */
        TlsVersions: string[];
        /**
         * 支持的加密套件列表。具体依赖**TLSVersions**的取值。
         * Cipher只要被任何一个传入的**TLSVersions**支持即可，例如选择了**TLSv1.3**，那么Cipher列表必须包含**TLSv1.3**支持的Cipher。
         * - **TLSv1.0**和**TLSv1.1**支持：
         *     - ECDHE-ECDSA-AES128-SHA
         *     - ECDHE-ECDSA-AES256-SHA
         *     - ECDHE-RSA-AES128-SHA
         *     - ECDHE-RSA-AES256-SHA
         *     - AES128-SHA
         *     - AES256-SHA
         *     - DES-CBC3-SHA
         * - **TLSv1.2**支持：
         *     - ECDHE-ECDSA-AES128-SHA
         *     - ECDHE-ECDSA-AES256-SHA
         *     - ECDHE-RSA-AES128-SHA
         *     - ECDHE-RSA-AES256-SHA
         *     - AES128-SHA
         *     - AES256-SHA
         *     - DES-CBC3-SHA
         *     - ECDHE-ECDSA-AES128-GCM-SHA256
         *     - ECDHE-ECDSA-AES256-GCM-SHA384
         *     - ECDHE-ECDSA-AES128-SHA256
         *     - ECDHE-ECDSA-AES256-SHA384
         *     - ECDHE-RSA-AES128-GCM-SHA256
         *     - ECDHE-RSA-AES256-GCM-SHA384
         *     - ECDHE-RSA-AES128-SHA256
         *     - ECDHE-RSA-AES256-SHA384
         *     - AES128-GCM-SHA256
         *     - AES256-GCM-SHA384
         *     - AES128-SHA256
         *     - AES256-SHA256
         * - **TLSv1.3**支持：
         *     - TLS_AES_128_GCM_SHA256
         *     - TLS_AES_256_GCM_SHA384
         *     - TLS_CHACHA20_POLY1305_SHA256
         *     - TLS_AES_128_CCM_SHA256
         *     - TLS_AES_128_CCM_8_SHA256
         */
        Ciphers: string[];
    }[];
}
