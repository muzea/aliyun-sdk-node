export interface CreateRepoSyncRuleRequest {
    /**
     * 源实例ID
     * @example `cri-hpdfkc6utbaq****`
     */
    "InstanceId": string;
    /**
     * 源实例命名空间名称
     * @example `ns1`
     */
    "NamespaceName": string;
    /**
     * 源实例仓库名称
     * @example `repo1`
     */
    "RepoName"?: string;
    /**
     * 目标实例地区ID
     * @example `cn-shanghai`
     */
    "TargetRegionId": string;
    /**
     * 目标实例ID
     * @example `cri-ibxs3piklys3****`
     */
    "TargetInstanceId": string;
    /**
     * 目标实例命名空间名称
     * @example `ns1`
     */
    "TargetNamespaceName": string;
    /**
     * 目标实例镜像仓库名称
     * @example `repo1`
     */
    "TargetRepoName"?: string;
    /**
     * Tag过滤规则
     * @example `.*`
     */
    "TagFilter": string;
    /**
     * 同步类型，取值：
     * - `REPO`：按照镜像仓库同步
     * - `NAMESPACE`：按照命名空间同步
     * @example `REPO`
     */
    "SyncScope": string;
    /**
     * 同步规则名称
     * @example `rule`
     */
    "SyncRuleName": string;
    /**
     * 触发同步动作，取值：
     * - `INITIATIVE`：手动触发
     *
     * - `PASSIVE`：自动触发
     * @example `PASSIVE`
     */
    "SyncTrigger"?: string;
    /**
     * 目标实例所在的账号UID
     * > 跨账号同步镜像时，需要使用账号UID。
     * @example `12645940***`
     */
    "TargetUserId"?: string;
}
