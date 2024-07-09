export interface DescribeDomainResolveStatisticsSummaryResponse {
    /**
     * 唯一请求识别码。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    PageSize: number;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 数据分页后总页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 总数据条数。
     * @example `1`
     */
    TotalItems: number;
    /**
     * 统计数据列表。
     */
    Statistics: {
        /**
         * 域名名称。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 请求量（次）。
         * @example `35509014`
         */
        Count: string;
        /**
         * 域名类型。
         * - PUBLIC：权威托管域名
         *  - CACHE：权威代理域名
         * @example `CACHE`
         */
        DomainType: string;
    }[];
}
