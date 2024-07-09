export interface ListSystemAggregationRulesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6800B790-B10A-5C2F-BEB3-F1D5CE61****`
     */
    RequestId: string;
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `30`
         */
        TotalCount: number;
    };
    /**
     * 结果列表。
     */
    AggregationList: {
        /**
         * 规则聚类的ID。
         * @example `1`
         */
        Id: number;
        /**
         * 该聚类对应的规则数。
         * @example `0`
         */
        RuleCount: number;
        /**
         * 规则聚类名称。
         * @example `远程控制****`
         */
        Name: string;
    }[];
}
