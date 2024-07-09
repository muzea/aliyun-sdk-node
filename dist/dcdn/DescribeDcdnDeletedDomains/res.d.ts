export interface DescribeDcdnDeletedDomainsResponse {
    /**
     * 请求ID。
     * @example `AA75AADB-5E25-4970-B480-EAA1F5658483`
     */
    RequestId: string;
    /**
     * 当前页码，同请求参数的**PageNumber**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页显示的域名个数，同请求参数的**PageSize**。
     * @example `5`
     */
    PageSize: number;
    /**
     * 查询到的域名总数。
     * @example `16`
     */
    TotalCount: number;
    Domains: {
        /**
         * 加速域名的状态信息。
         */
        PageData: {
            /**
             * 加速域名修改时间。日期格式按照ISO 8601表示法，并使用UTC+0时间，格式为yyyy-MM-DDThh:mm:ssZ。
             * @example `2015-10-28T11:05:52Z`
             */
            GmtModified: string;
            /**
             * 加速域名名称。
             * @example `example.com`
             */
            DomainName: string;
        }[];
    };
}
