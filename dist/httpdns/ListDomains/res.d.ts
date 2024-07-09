export interface ListDomainsResponse {
    /**
     * 本次查询获取的域名数量。
     * @example `5`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `50F9C40E-188D-4208-BE2C-7427E531****`
     */
    RequestId: string;
    /**
     * 域名列表总数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 域名列表总数。
     * @example `18`
     */
    TotalCount: number;
    DomainInfos: {
        /**
         * 本次获取的域名列表。
         */
        DomainInfo: {
            /**
             * HTTPS-IPv6解析次数。
             * @example `20`
             */
            ResolvedHttps6: number;
            /**
             * HTTP-IPv4解析次数。
             * @example `10`
             */
            Resolved: number;
            /**
             * HTTP-IPv6解析次数。
             * @example `20`
             */
            Resolved6: number;
            /**
             * 域名名称。
             * @example `www.example.com`
             */
            DomainName: string;
            /**
             * HTTPS-IPv4解析次数。
             * @example `10`
             */
            ResolvedHttps: number;
        }[];
    };
}
