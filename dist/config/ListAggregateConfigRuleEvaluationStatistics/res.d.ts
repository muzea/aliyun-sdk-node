export interface ListAggregateConfigRuleEvaluationStatisticsResponse {
    /**
     * 请求ID。
     * @example `9EFA436B-FC6F-513B-9DB8-C96E6CEBE5E0`
     */
    RequestId: string;
    /**
     * 评估统计结果。
     */
    EvaluationResults: {
        /**
         * 账号组ID。
         * @example `ca-edd3626622af00b3****`
         */
        AggregatorId: string;
        /**
         * 不合规的资源数量。
         * @example `25`
         */
        NonCompliantResourceCnt: number;
        /**
         * 资源总数。
         * @example `153`
         */
        TotalResourceCnt: number;
        /**
         * 不合规的规则数量。
         * @example `3`
         */
        NonCompliantRuleCnt: number;
        /**
         * 规则总数。
         * @example `10`
         */
        TotalRuleCnt: number;
        /**
         * 统计日期。
         * @example `2023-06-27`
         */
        StatisticDate: string;
    }[];
}
