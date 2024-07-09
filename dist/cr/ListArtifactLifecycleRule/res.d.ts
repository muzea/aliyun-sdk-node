export interface ListArtifactLifecycleRuleResponse {
    /**
     * 请求ID
     * @example `F92D82F9-A4C4-5A4A-97B9-E495BF1B****`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `success`
     */
    Code: string;
    /**
     * 页号
     * @example `1`
     */
    PageNo: number;
    /**
     * 调用是否成功，取值：
     * - `true`：调用成功
     * - `false`：调用失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 页大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数量
     * @example `39`
     */
    TotalCount: number;
    /**
     * 规则列表
     */
    Rules: {
        /**
         * 下一次执行时间
         * @example `1638187989000`
         */
        NextTime: number;
        /**
         * 创建时间
         * @example `1638187989000`
         */
        CreateTime: number;
        /**
         * 保留镜像版本的正则表达式
         * @example `.*-alpine
        `
         */
        TagRegexp: string;
        /**
         * 是否开启生命周期管理
         * @example `true`
         */
        EnableDeleteTag: boolean;
        /**
         * 实例ID
         * @example `cri-brlg4cbj2yl****`
         */
        InstanceId: string;
        /**
         * 命名空间名称
         * @example `test-ns`
         */
        NamespaceName: string;
        /**
         * 规则ID
         * @example `cralr-yqx1q5sir6d****`
         */
        RuleId: string;
        /**
         * 修改时间
         * @example `1678341923385`
         */
        ModifiedTime: number;
        /**
         * 保留镜像个数
         * @example `30`
         */
        RetentionTagCount: number;
        /**
         * 是否自动执行
         * @example `false`
         */
        Auto: boolean;
        /**
         * 执行周期
         * @example `WEEK`
         */
        ScheduleTime: string;
        /**
         * 仓库名称
         * @example `test_1`
         */
        RepoName: string;
        /**
         * 清理范围
         * @example `INSTANCE`
         */
        Scope: string;
    }[];
}
