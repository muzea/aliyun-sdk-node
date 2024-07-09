export interface DescribeDcdnWafDomainResponse {
    /**
     * 加速域名数量。
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
         * ACL状态。
         * - 0：关闭。
         * - 1：开通。
         * @example `1`
         */
        AclStatus: number;
        /**
         * 域名创建状态：
         * - 1：域名创建成功/域名有效。
         * - 10：域名创建中。
         * - 11：域名创建失败。
         * @example `1`
         */
        Status: number;
        /**
         * 开通了WAF的加速域名。
         * @example `example.com`
         */
        Domain: string;
        /**
         * CC状态。
         * - 0：关闭。
         * - 1：开通。
         * @example `1`
         */
        CcStatus: number;
        /**
         * WAF状态。
         * - 0：关闭。
         * - 1：开通。
         * @example `1`
         */
        WafStatus: number;
    }[];
}
