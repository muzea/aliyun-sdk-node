export interface GetResourceComplianceByConfigRuleResponse {
    /**
     * 资源的评估结果。
     */
    ComplianceResult: {
        /**
         * 评估资源总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 资源的评估结果。
         */
        Compliances: {
            /**
             * 合规评估结果。取值：
             * - COMPLIANT：合规。
             * - NON_COMPLIANT：不合规。
             * - NOT_APPLICABLE：不适用。
             * - INSUFFICIENT_DATA：无数据。
             * @example `COMPLIANT`
             */
            ComplianceType: string;
            /**
             * 符合评估结果的资源数。例如：`ComplianceType`为`COMPLIANT`，表示合规的资源数。
             * @example `5`
             */
            Count: number;
        }[];
    };
    /**
     * 请求ID。
     * @example `23306AB1-34E0-468F-BD7B-68D8AEAB753d`
     */
    RequestId: string;
}
