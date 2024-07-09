export interface AddDomainRequest {
    /**
     * HTTPDNS账户ID。
     * @example `123456`
     */
    "AccountId"?: string;
    /**
     * 域名名称。
     * @example `www.example.com`
     */
    "DomainName": string;
}
