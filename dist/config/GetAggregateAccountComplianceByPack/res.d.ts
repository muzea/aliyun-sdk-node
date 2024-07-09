export interface GetAggregateAccountComplianceByPackResponse {
    /**
     * 请求ID。
     * @example `6EC7AED1-172F-42AE-9C12-295BC2ADB751`
     */
    RequestId: string;
    /**
     * 合规包中成员账号的合规结果。
     */
    AccountComplianceResult: {
        /**
         * 合规包ID。
         * @example `cp-541e626622af0087****`
         */
        CompliancePackId: string;
        /**
         * 不合规成员账号数。
         * @example `0`
         */
        NonCompliantCount: number;
        /**
         * 成员账号总数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 成员账号的合规结果列表。
         */
        AccountCompliances: {
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
             * 账号组中的成员账号ID。
             * @example `100931896542****`
             */
            AccountId: number;
            /**
             * 账号组中的成员账号名称。
             * @example `Alice`
             */
            AccountName: string;
        }[];
    };
}
