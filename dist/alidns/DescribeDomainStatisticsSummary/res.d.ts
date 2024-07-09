export interface DescribeDomainStatisticsSummaryResponse {
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `5`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `CC625C21-8832-4683-BF10-C3CFB1A4FA13`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 数据分页后总页数。
     * @example `14`
     */
    TotalPages: number;
    /**
     * 数据总个数。
     * @example `68`
     */
    TotalItems: number;
    Statistics: {
        /**
         * 请求量数据列表。
         */
        Statistic: {
            /**
             * 域名名称。
             * @example `ali-gslb.com`
             */
            DomainName: string;
            /**
             * 请求量（次）。
             * @example `35509014`
             */
            Count: number;
            /**
             * 域名类型，大小写不敏感。取值:
             * PUBLIC：权威托管域名（默认值）
             * CACHE：权威代理域名
             * @example `PUBLIC`
             */
            DomainType: string;
            /**
             * 域名DNS流量分析开启状态：
             * - OPEN：开启
             * - CLOSE：关闭
             * @example `OPEN`
             */
            resolveAnalysisStatus: string;
        }[];
    };
}
