export interface CopyCompliancePacksRequest {
    /**
     * 合规包ID列表。多个合规包ID之间用半角逗号（,）分隔。
     * 关于如何获取合规包ID，请参见[ListCompliancePacks](~~263332~~)。
     * @example `cp-4c02626622af0050****,cp-47c1626622af0050****`
     */
    "SrcCompliancePackIds": string;
    /**
     * 待复制合规包所属账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-05e6626622af0050****`
     */
    "SrcAggregatorId"?: string;
    /**
     * 合规包复制到的账号组ID列表。多个账号组ID之间用半角逗号（,）分隔。
     * > 该值为空，表示复制到当前账号组。
     * @example `ca-c73c626622af00f8****`
     */
    "DesAggregatorIds"?: string;
}
