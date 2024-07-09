export interface RetrieveDomainRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名名称。
     * @example `dns-example.top`
     */
    "DomainName": string;
}
