export interface DescribeDomainsResponse {
    /**
     * 分页大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `A6B3BB61-69CB-50E0-9DC0-0C1658D44A47`
     */
    RequestId: string;
    /**
     * 当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条目数。
     * @example `12`
     */
    TotalCount: number;
    Domains: {
        /**
         * 域名列表信息。
         */
        Domain: {
            /**
             * 域名。
             * @example `www.aliyun.com`
             */
            DomainName: string;
        }[];
    };
}
