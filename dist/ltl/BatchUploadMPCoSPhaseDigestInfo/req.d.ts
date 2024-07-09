export interface BatchUploadMPCoSPhaseDigestInfoRequest {
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
     * @example `644208887511****`
     */
    "PhaseId": string;
    /**
     * 阶段数据列表。详情请参见下表PhaseData。
     * @example `[{"dataKey":"987823074334****","phaseData":"b42958ddf8a13dee78fcc906d0fb48e912ddc44b3c2c2759e4824b6e2d24****","dataSeq":"be350cd52b0f47846f93df7d0d4febd86025ee6c028a6b22a6ff1ac6d3a2****","relatedDataList":[{"relatedPhaseId":"987823074334****","relatedDataKey":"be350cd52b0f47846f93df7d0d4febd86025ee6c028a6b22a6ff1ac6d3a2****","relatedPhaseData":"某公司某业务数据。","relatedDataSeq":"b71cca5502d8d7d0057a5ebf44d78ae75280436b86dcbda643c4d264ff2a****"}]}]`
     */
    "PhaseDataList": any;
}
