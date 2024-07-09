export interface DescribeMPCoSPhaseInfoRequest {
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
     * 数据唯一标识。
     * @example `32bfce96b4e2f9bec0f2ea5cc2f14ace1486cc146d5832d3a84e5332fe89****`
     */
    "DataKey": string;
    /**
     * 数据序列号。
     * @example `be350cd52b0f47846f93df7d0d4febd86025ee6c028a6b22a6ff1ac6d3a2****`
     */
    "DataSeq"?: string;
}
