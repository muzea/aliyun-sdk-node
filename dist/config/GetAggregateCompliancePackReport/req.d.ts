export interface GetAggregateCompliancePackReportRequest {
    /**
     * 合规包ID。
     * 关于如何获取合规包ID，请参见[ListAggregateCompliancePacks](~~262059~~)。
     * @example `cp-fdc8626622af00f9****`
     */
    "CompliancePackId": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-f632626622af0079****`
     */
    "AggregatorId": string;
}
