export interface CreateBuildRecordByRuleRequest {
    /**
     * 实例ID
     * @example `cri-asd6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-8dz3aedjqlmk****`
     */
    "RepoId": string;
    /**
     * 构建规则ID
     * @example `crbr-1j95g4bu2s1i****`
     */
    "BuildRuleId": string;
}
