export interface ListSecurityPolicyResponse {
    /**
     * 请求ID。
     * @example `D7A8875F-373A-5F48-8484-25B07A61F2AF`
     */
    RequestId: string;
    /**
     * TLS安全策略列表。
     */
    SecurityPolicies: {
        /**
         * TLS安全策略ID。
         * @example `sp-wuytp9pa******
        `
         */
        SecurityPolicyId: string;
        /**
         * TLS安全策略名称。
         * @example `TLSCipherPolicy`
         */
        SecurityPolicyName: string;
        /**
         * TLS协议版本，取值：**TLSv1.0**、**TLSv1.1**、**TLSv1.2**和**TLSv1.3**。
         * @example `TLSv1.0`
         */
        TlsVersion: string;
        /**
         * 支持的加密套件列表，具体依赖TLSVersion值。最多支持添加32个加密套件。
         * TLSv1.0和TLSv1.1 支持：
         * - **ECDHE-ECDSA-AES128-SHA**
         * - **ECDHE-ECDSA-AES256-SHA**
         * - **ECDHE-RSA-AES128-SHA**
         * - **ECDHE-RSA-AES256-SHA**
         * - **AES128-SHA**
         * - **AES256-SHA**
         * - **DES-CBC3-SHA**
         * TLSv1.2支持：
         * -   **ECDHE-ECDSA-AES128-SHA**
         * -   **ECDHE-ECDSA-AES256-SHA**
         * -   **ECDHE-RSA-AES128-SHA**
         * -   **ECDHE-RSA-AES256-SHA**
         * -   **AES128-SHA**
         * -   **AES256-SHA**
         * -   **DES-CBC3-SHA**
         * -   **ECDHE-ECDSA-AES128-GCM-SHA256**
         * -   **ECDHE-ECDSA-AES256-GCM-SHA384**
         * -   **ECDHE-ECDSA-AES128-SHA256**
         * -   **ECDHE-ECDSA-AES256-SHA384**
         * -   **ECDHE-RSA-AES128-GCM-SHA256**
         * -   **ECDHE-RSA-AES256-GCM-SHA384**
         * -   **ECDHE-RSA-AES128-SHA256**
         * -   **ECDHE-RSA-AES256-SHA384**
         * -   **AES128-GCM-SHA256**
         * -   **AES256-GCM-SHA384**
         * -   **AES128-SHA256**
         * -   **AES256-SHA256**
         * TLSv1.3支持：
         * - **TLS_AES_128_GCM_SHA256**
         * - **TLS_AES_256_GCM_SHA384**
         * - **TLS_CHACHA20_POLY1305_SHA256**
         * - **TLS_AES_128_CCM_SHA256**
         * - **TLS_AES_128_CCM_8_SHA256**
         * @example `ECDHE-ECDSA-AES128-SHA`
         */
        Ciphers: string;
        /**
         * 网络型负载均衡实例所在的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 标签。
         */
        Tags: {
            /**
             * 标签键。最多支持10个标签键。
             * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `Test`
             */
            Key: string;
            /**
             * 标签值。最多支持10个标签值。
             * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `Test`
             */
            Value: string;
        }[];
        /**
         * 关联的监听列表。
         */
        RelatedListeners: {
            /**
             * 监听ID。
             * @example `lsn-bp1bpn0kn908w4nbw****`
             */
            ListenerId: string;
            /**
             * 监听端口。
             * @example `443`
             */
            ListenerPort: number;
            /**
             * 监听协议。仅取值**TCPSSL**。
             * @example `TCPSSL`
             */
            ListenerProtocol: string;
            /**
             * 网络型负载均衡实例ID。
             * @example `nlb-83ckzc8d4xlp8o****`
             */
            LoadBalancerId: string;
        }[];
        /**
         * 资源组ID。
         * @example `rg-atstuj3rtop****`
         */
        ResourceGroupId: string;
        /**
         * TLS安全策略的状态，取值：
         * - **Configuring** ：配置中。
         * - **Available**： 正常可用。
         * @example `Available`
         */
        SecurityPolicyStatus: string;
    }[];
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
}
