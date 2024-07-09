export interface ListDomainsResponse {
    /**
     * 域名列表。
     */
    domains: string[];
    /**
     * 当前页返回的域名数量。
     * @example `1`
     */
    count: number;
    /**
     * 域名总数。
     * @example `1`
     */
    total: number;
}
