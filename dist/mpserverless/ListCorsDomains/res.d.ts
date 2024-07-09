export interface ListCorsDomainsResponse {
    /**
     * 请求ID。
     * @example `ED81670E-570A-481C-A50D-6B0EAA823BB1`
     */
    RequestId: string;
    /**
     * 域名列表。
     */
    Domains: {
        /**
         * 域名。
         * @example `example.com`
         */
        Domain: string;
        /**
         * 域名ID。
         * @example `97e3ff58-01e4-****-b975-1805fec34d77`
         */
        DomainId: string;
    }[];
}
