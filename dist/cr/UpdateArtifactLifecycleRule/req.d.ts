export interface UpdateArtifactLifecycleRuleRequest {
    /**
     * 实例ID
     * @example `cri-r6ym0lerldp****`
     */
    "InstanceId": string;
    /**
     * 是否自动执行
     * @example `false`
     */
    "Auto"?: boolean;
    /**
     * 执行周期
     * @example `WEEK`
     */
    "ScheduleTime"?: string;
    /**
     * 命名空间名称
     * @example `test-ns`
     */
    "NamespaceName"?: string;
    /**
     * 镜像仓库名称
     * @example `test_1`
     */
    "RepoName"?: string;
    /**
     * 保留镜像版本的正则表达式
     * @example `.*production_.*`
     */
    "TagRegexp"?: string;
    /**
     * 保留镜像个数
     * @example `30`
     */
    "RetentionTagCount"?: number;
    /**
     * 是否开启生命周期管理
     * @example `true`
     */
    "EnableDeleteTag"?: boolean;
    /**
     * 规则ID
     * @example `cralr-luq6qiegzvx****`
     */
    "RuleId": string;
    /**
     * 清理范围
     * @example `REPO`
     */
    "Scope"?: string;
}
