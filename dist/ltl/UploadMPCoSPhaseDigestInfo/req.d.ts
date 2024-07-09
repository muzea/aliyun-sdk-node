export interface UploadMPCoSPhaseDigestInfoRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 业务链标识。
     * @example `489973087549****`
     */
    "BizChainId": string;
    /**
     * 协同模型标识。
     * @example `383860792287****`
     */
    "PhaseGroupId": string;
    /**
     * 阶段标识。
     * @example `644208887511***`
     */
    "PhaseId": string;
    /**
     * 数据唯一标识。
     * @example `32bfce96b4e2f9bec0f2ea5cc2f14ace1486cc146d5832d3a84e5332fe89****`
     */
    "DataKey": string;
    /**
     * 数据序列号。
     * @example `be350cd52b0f47846f93df7d0d4febd86025ee6c028a6b22a6ff1ac6d3a2****`
     */
    "DataSeq"?: string;
    /**
     * 阶段数据的SHA256摘要值，要求长度为64字符。
     * @example `dee68c73bdead5f717fc25803236924c165d0a3c1728aa58cbf05b1473c2****`
     */
    "PhaseData": string;
    /**
     * 关联数据列表。详情请参见下表RelatedData。
     * @example `[{"relatedPhaseId":"987823074334****","relatedDataKey":"be350cd52b0f47846f93df7d0d4febd86025ee6c028a6b22a6ff1ac6d3a2****","relatedPhaseData":"某公司某业务数据。","relatedDataSeq":"b71cca5502d8d7d0057a5ebf44d78ae75280436b86dcbda643c4d264ff2a****"}]`
     */
    "RelatedDataList"?: any;
}
