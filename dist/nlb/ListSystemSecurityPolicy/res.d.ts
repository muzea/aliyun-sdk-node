export interface ListSystemSecurityPolicyResponse {
    /**
     * 请求ID。
     * @example `5C057647-284B-5C67-A07E-4B8F3DABA9F9`
     */
    RequestId: string;
    /**
     * TLS安全策略列表。
     */
    SecurityPolicies: {
        /**
         * TLS策略ID。
         * @example `tls_cipher_policy_1_0`
         */
        SecurityPolicyId: string;
        /**
         * TLS安全策略名称。
         * @example `test`
         */
        SecurityPolicyName: string;
        /**
         * TLS版本。
         * @example `TLSv1.0,TLSv1.1,TLSv1.2`
         */
        TlsVersion: string;
        /**
         * 加密套件。
         * @example `ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-ECDSA-AES128-SHA256,ECDHE-ECDSA-AES256-SHA384,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-RSA-AES128-SHA256,ECDHE-RSA-AES256-SHA384,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA256,AES256-SHA256,ECDHE-ECDSA-AES128-SHA,ECDHE-ECDSA-AES256-SHA,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-SHA,AES256-SHA,DES-CBC3-SHA`
         */
        Ciphers: string;
    }[];
}
