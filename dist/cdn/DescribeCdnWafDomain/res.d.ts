export interface DescribeCdnWafDomainResponse {
    /**
     * 加速域名的数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `CB1A380B-09F0-41BB-802B-72F8FD6DA2FE`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     */
    OutPutDomains: {
        /**
         * ACL状态。取值：
         * - **0**：关闭。
         * - **1**：开通。
         * @example `1`
         */
        AclStatus: string;
        /**
         * WAF域名状态。取值：
         * - **1**：WAF域名创建成功或WAF域名有效。
         * - **10**：WAF域名创建中。
         * - **11**：WAF域名创建失败。
         * @example `1`
         */
        Status: string;
        /**
         * 域名信息。
         * @example `example.com`
         */
        Domain: string;
        /**
         * CC状态。取值：
         * - **0**：关闭。
         * - **1**：开通。
         * @example `1`
         */
        CcStatus: string;
        /**
         * WAF状态。取值：
         * - **0**：关闭。
         * - **1**：开通。
         * @example `1`
         */
        WafStatus: string;
    }[];
}
