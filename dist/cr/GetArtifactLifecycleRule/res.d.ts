export interface GetArtifactLifecycleRuleResponse {
    /**
     * 下一次执行时间
     * @example `1701878400000`
     */
    NextTime: number;
    /**
     * 创建时间
     * @example `1571926439000`
     */
    CreateTime: number;
    /**
     * 保留镜像版本的正则表达式
     * @example `.*-alpine`
     */
    TagRegexp: string;
    /**
     * 是否开启生命周期管理
     * @example `true`
     */
    EnableDeleteTag: boolean;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    InstanceId: string;
    /**
     * 命名空间名称
     * @example `test-namespace`
     */
    NamespaceName: string;
    /**
     * 规则ID
     * @example `cralr-a18bkiajy8****`
     */
    RuleId: string;
    /**
     * 请求ID
     * @example `724402D0-75CD-4794-BC20-7D37208****`
     */
    RequestId: string;
    /**
     * 最近修改时间
     * @example `1638259914000`
     */
    ModifiedTime: number;
    /**
     * 保留镜像个数
     * @example `30`
     */
    RetentionTagCount: number;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否自动执行
     * @example `true`
     */
    Auto: boolean;
    /**
     * 执行周期
     * @example `WEEK`
     */
    ScheduleTime: string;
    /**
     * 镜像仓库名称
     * @example `test-repo`
     */
    RepoName: string;
    /**
     * 清理范围
     * @example `INSTANCE`
     */
    Scope: string;
}
