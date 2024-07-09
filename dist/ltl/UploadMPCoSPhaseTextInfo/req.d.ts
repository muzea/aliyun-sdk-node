export interface UploadMPCoSPhaseTextInfoRequest {
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
     * @example `196487512811****`
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
     * 阶段数据。长度要求1~4096字节，一个中文字符占两位字符。
     * @example `987823074334****`
     */
    "PhaseData": string;
    /**
     * 关联数据列表。详情请参见下表RelatedData。
     * @example `[{"relatedPhaseId":"987823074334****","relatedDataKey":"be350cd52b0f47846f93df7d0d4febd86025ee6c028a6b22a6ff1ac6d3a2****","relatedPhaseData":"某公司某业务数据。","relatedDataSeq ":"b71cca5502d8d7d0057a5ebf44d78ae75280436b86dcbda643c4d264ff2a****"}]`
     */
    "RelatedDataList"?: any;
}
