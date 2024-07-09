export interface DescribeDcdnWafPolicyDomainsResponse {
    /**
     * 每页显示的域名个数，同请求参数的PageSize。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `153ca2cd-3c01-44be-b480-64dbc6c88630`
     */
    RequestId: string;
    /**
     * 页码，同请求参数的PageNumber。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询到的域名总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 加速域名。
     */
    Domains: {
        /**
         * 接入指定防护策略的加速域名。
         * @example `example.com`
         */
        DomainName: string;
    }[];
}
