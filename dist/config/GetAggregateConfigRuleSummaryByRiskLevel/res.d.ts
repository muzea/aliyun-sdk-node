export interface GetAggregateConfigRuleSummaryByRiskLevelResponse {
    /**
     * 请求ID。
     * @example `A3CDD98C-DE65-46AC-B2D2-04A4A9AB5B73`
     */
    RequestId: string;
    /**
     * 不同风险等级规则的合规概要。
     */
    ConfigRuleSummaries: {
        /**
         * 规则风险等级。取值：
         * - 1：高风险。
         * - 2：中风险。
         * - 3：低风险。
         * @example `1`
         */
        RiskLevel: number;
        /**
         * 合规规则数。
         * @example `3`
         */
        CompliantCount: number;
        /**
         * 不合规规则数。
         * @example `1`
         */
        NonCompliantCount: number;
    }[];
}
