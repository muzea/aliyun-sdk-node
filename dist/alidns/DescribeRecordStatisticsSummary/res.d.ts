export interface DescribeRecordStatisticsSummaryResponse {
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `E49F0023-4A98-486F-8BA3-6003D5664105`
     */
    RequestId: string;
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
     * 数据总个数。
     * @example `3`
     */
    TotalItems: number;
    Statistics: {
        /**
         * 请求量数据列表。
         */
        Statistic: {
            /**
             * 子域名。
             * @example `t1.alitest2.com`
             */
            SubDomain: string;
            /**
             * 请求量（次）。
             * @example `838711553`
             */
            Count: number;
        }[];
    };
}
