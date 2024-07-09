export interface GetAggregateConfigRulesReportRequest {
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-f632626622af0079****`
     */
    "AggregatorId": string;
    /**
     * 评估报告ID。
     * @example `crp-88176457e0d900c9****`
     */
    "ReportId"?: string;
}
