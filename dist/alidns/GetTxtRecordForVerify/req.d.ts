export interface GetTxtRecordForVerifyRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名名称。
     * @example `dns-example.top`
     */
    "DomainName"?: string;
    /**
     * txt验证的功能。取值：
     * - ADD_SUB_DOMAIN
     * - RETRIEVAL
     * @example `ADD_SUB_DOMAIN`
     */
    "Type": string;
}
