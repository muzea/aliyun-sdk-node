export interface DescribeDcdnWafDomainsResponse {
    /**
     * 每页显示的域名个数，同请求参数的PageSize。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `153ca2cd-3c01-44be-b408-64dbc6c88630`
     */
    RequestId: string;
    /**
     * 页码，同请求参数的PageNumber。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 防护域名总数。
     * @example `15`
     */
    TotalCount: number;
    /**
     * 防护域名。
     */
    Domains: {
        /**
         * 该防护域名配置的防护策略个数。
         * @example `3`
         */
        PolicyCount: number;
        /**
         * 获取建连IP的Header。
         * @example `X-Forwarded-For`
         */
        ClientIpTag: string;
        /**
         * 防护域名名称。
         * @example `example.com`
         */
        DomainName: string;
    }[];
}
