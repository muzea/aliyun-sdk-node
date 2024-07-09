export interface DeleteRepoBuildRuleRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-xwvi3osiy4ff****`
     */
    "RepoId": string;
    /**
     * 构建规则ID
     * @example `crbr-36tffn0kouvi****`
     */
    "BuildRuleId": string;
}
