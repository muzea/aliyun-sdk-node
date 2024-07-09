export interface GetComplianceSummaryResponse {
    /**
     * 请求ID。
     * @example `CAEE6F34-DEDC-4BAA-AA8C-946D5D008737`
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
             * 合规的资源数量。
             * @example `1`
             */
            CompliantCount: number;
            /**
             * 不合规的资源数量。
             * @example `12`
             */
            NonCompliantCount: number;
            /**
             * 合规结果统计时的时间戳。单位：毫秒。
             * @example `1589853712165`
             */
            ComplianceSummaryTimestamp: number;
            /**
             * 资源总数。
             * @example `13`
             */
            TotalCount: number;
        };
        /**
         * 规则维度的合规结果统计概览。
         */
        ComplianceSummaryByConfigRule: {
            /**
             * 合规的规则数量。
             * @example `5`
             */
            CompliantCount: number;
            /**
             * 不合规的规则数量。
             * @example `11`
             */
            NonCompliantCount: number;
            /**
             * 合规统计时的时间戳。单位：毫秒。
             * @example `1589853712165`
             */
            ComplianceSummaryTimestamp: number;
            /**
             * 规则总数。
             * @example `16`
             */
            TotalCount: number;
        };
    };
}
