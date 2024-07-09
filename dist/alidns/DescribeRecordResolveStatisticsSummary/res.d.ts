export interface DescribeRecordResolveStatisticsSummaryResponse {
    /**
     * 唯一请求识别码。
     * @example `389DFFA3-77A5-4A9E-BF3D-147C6F98A5BA`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数，最大值**500**，默认为**20**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页数，起始值为1，默认为1。
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
         * 子域。
         * @example `test.example.com`
         */
        SubDomain: string;
        /**
         * 子域名。
         * @example `test.example.com`
         */
        DomainName: string;
        /**
         * 请求量（次）。
         * @example `330`
         */
        Count: string;
        /**
         * 域名类型，大小写不敏感。取值：
         * - PUBLIC：权威托管域名（默认值）
         * - CACHE：权威代理域名
         * @example `PUBLIC`
         */
        DomainType: string;
    }[];
}
