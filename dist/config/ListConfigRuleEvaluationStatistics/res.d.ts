export interface ListConfigRuleEvaluationStatisticsResponse {
    /**
     * 请求ID。
     * @example `4FF2B787-347E-5299-A196-2C0448DEA341`
     */
    RequestId: string;
    /**
     * 合规统计结果。
     */
    EvaluationResults: {
        /**
         * 不合规的资源数量。
         * @example `30`
         */
        NonCompliantResourceCnt: number;
        /**
         * 资源总数。
         * @example `91`
         */
        TotalResourceCnt: number;
        /**
         * 不合规的规则数量。
         * @example `5`
         */
        NonCompliantRuleCnt: number;
        /**
         * 规则总数。
         * @example `13`
         */
        TotalRuleCnt: number;
        /**
         * 统计日期。
         * @example `2023-06-27`
         */
        StatisticDate: string;
    }[];
}
