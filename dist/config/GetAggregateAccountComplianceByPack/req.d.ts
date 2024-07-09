export interface GetAggregateAccountComplianceByPackRequest {
    /**
     * 合规包ID。
     * 关于如何获取合规包ID，请参见[ListAggregateCompliancePacks](~~262059~~)。
     * @example `cp-541e626622af0087****`
     */
    "CompliancePackId": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-04b3fd170e340007****`
     */
    "AggregatorId": string;
}
