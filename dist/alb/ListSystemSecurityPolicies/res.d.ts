export interface ListSystemSecurityPoliciesResponse {
    /**
     * 请求ID。
     * @example `593B0448-D13E-4C56-AC0D-FDF0F******`
     */
    RequestId: string;
    /**
     * 安全策略列表。
     */
    SecurityPolicies: {
        /**
         * 支持的加密算法。
         */
        Ciphers: string[];
        /**
         * 安全策略实例ID。
         * @example `sp-n0kn923****`
         */
        SecurityPolicyId: string;
        /**
         * 支持的TLS协议版本列表。
         */
        TLSVersions: string[];
    }[];
}
