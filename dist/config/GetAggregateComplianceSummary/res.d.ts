export interface GetAggregateComplianceSummaryResponse {
    /**
     * 请求ID。
     * @example `929B8360-BD57-54FF-96DB-AD1D9B476769`
     */
    RequestId: string;
    /**
     * 合规结果统计概览。
     */
    ComplianceSummary: {
        /**
         * 资源维度的合规结果统计概览。
         */
        ComplianceSummaryByResource: {
            /**
             * 合规的资源数。
             * @example `20`
             */
            CompliantCount: number;
            /**
             * 不合规的资源数。
             * @example `11`
             */
            NonCompliantCount: number;
            /**
             * 合规统计时的时间戳。单位：毫秒。
             * @example `1589853822103`
             */
            ComplianceSummaryTimestamp: number;
            /**
             * 资源总数。
             * @example `31`
             */
            TotalCount: number;
        };
        /**
         * 规则维度的合规统计概览。
         */
        ComplianceSummaryByConfigRule: {
            /**
             * 合规的规则数。
             * @example `4`
             */
            CompliantCount: number;
            /**
             * 不合规的规则数。
             * @example `5`
             */
            NonCompliantCount: number;
            /**
             * 合规统计时的时间戳。单位：毫秒。
             * @example `1589853822103`
             */
            ComplianceSummaryTimestamp: number;
            /**
             * 规则总数。
             * @example `9`
             */
            TotalCount: number;
        };
    };
}
