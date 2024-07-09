export interface GetAggregateConfigRuleComplianceByPackResponse {
    /**
     * 请求ID。
     * @example `C6B0C0A8-3245-48F1-AEAB-BC1A446E99D0`
     */
    RequestId: string;
    /**
     * 合规包中规则的合规结果。
     */
    ConfigRuleComplianceResult: {
        /**
         * 合规包ID。
         * @example `cp-541e626622af0087****`
         */
        CompliancePackId: string;
        /**
         * 不合规规则数。
         * @example `0`
         */
        NonCompliantCount: number;
        /**
         * 规则合规包列表。
         */
        ConfigRuleCompliances: {
            /**
             * 合规类型。取值：
             * - COMPLIANT：合规。
             * - NON_COMPLIANT：不合规。
             * - NOT_APPLICABLE：不适用。
             * - INSUFFICIENT_DATA：无数据。
             * @example `COMPLIANT`
             */
            ComplianceType: string;
            /**
             * 合规包中的规则名称。
             * @example `弹性IP实例带宽满足最低要求`
             */
            ConfigRuleName: string;
            /**
             * 合规包中的规则ID。
             * @example `cr-fdc8626622af00f9****`
             */
            ConfigRuleId: string;
        }[];
        /**
         * 规则总数。
         * @example `1`
         */
        TotalCount: number;
    };
}
