export interface DeleteDomainRequest {
    /**
     * HTTPDNS账户ID。
     * @example `12****`
     */
    "AccountId"?: string;
    /**
     * 域名名称。
     * @example `www.example.com`
     */
    "DomainName": string;
}
