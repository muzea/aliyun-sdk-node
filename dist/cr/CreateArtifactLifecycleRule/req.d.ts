export interface CreateArtifactLifecycleRuleRequest {
    /**
     * 实例ID
     * @example `cri-gbwfk7qbgrxe****`
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
     * @example `dev-backend`
     */
    "NamespaceName"?: string;
    /**
     * 镜像仓库名称
     * @example `test_1`
     */
    "RepoName"?: string;
    /**
     * 保留镜像版本的正则表达式
     * @example `release-.*`
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
     * 清理范围
     * @example `INSTANCE`
     */
    "Scope"?: string;
}
