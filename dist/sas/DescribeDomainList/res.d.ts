export interface DescribeDomainListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF46038`
     */
    RequestId: string;
    /**
     * 查询结果页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `10`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的域名的数量。默认值为**10**，表示每页显示10条域名。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询到的域名的总数量。
         * @example `27`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页面显示的域名的数量。
         * @example `10`
         */
        Count: number;
    };
    /**
     * 域名资产信息列表。
     */
    DomainListResponseList: {
        /**
         * 域名对应的IP信息。
         * @example `1.2.XX.XX,1.0.XX.XX`
         */
        IpList: string;
        /**
         * 域名名称或网站名称。
         * @example `example.com`
         */
        Domain: string;
    }[];
}
