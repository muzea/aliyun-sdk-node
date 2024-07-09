export interface ListRepoSyncRuleResponse {
    /**
     * 请求ID
     * @example `838D1602-6D8F-47FB-B60A-656645D2****`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 页号
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 页大小
     * @example `30`
     */
    PageSize: number;
    /**
     * 总数量
     * @example `1`
     */
    TotalCount: number;
    /**
     * 同步规则列表
     */
    SyncRules: {
        /**
         * 触发策略，取值：
         * - `INITIATIVE`：主动触发
         * - `PASSIVE`：被动触发
         * @example `PASSIVE`
         */
        SyncTrigger: string;
        /**
         * 创建时间
         * @example `1572604642000`
         */
        CreateTime: number;
        /**
         * 源实例区域ID
         * @example `cn-shanghai`
         */
        LocalRegionId: string;
        /**
         * 同步范围，取值：
         * - `NAMESPACE`：按照命名空间同步
         * - `REPO`：按照镜像仓库同步
         * @example `NAMESPACE`
         */
        SyncScope: string;
        /**
         * TAG过滤规则
         * @example `.*`
         */
        TagFilter: string;
        /**
         * 目标实例命名空间名称
         * @example `test`
         */
        TargetNamespaceName: string;
        /**
         * 目标实例ID
         * @example `cri-k77rd2eo9ztt****`
         */
        TargetInstanceId: string;
        /**
         * 目标实例仓库名称
         * @example `test-repo-target`
         */
        TargetRepoName: string;
        /**
         * 同步规则ID
         * @example `crsr-7lph66uloi6h****`
         */
        SyncRuleId: string;
        /**
         * 修改时间
         * @example `1572604642000`
         */
        ModifiedTime: number;
        /**
         * 同步规则名称
         * @example `sync-rule-1`
         */
        SyncRuleName: string;
        /**
         * 目标实例地区ID
         * @example `cn-shenzhen`
         */
        TargetRegionId: string;
        /**
         * 源实例ID
         * @example `cri-kmsiwlxxdcva****`
         */
        LocalInstanceId: string;
        /**
         * 源实例命名空间名称
         * @example `test`
         */
        LocalNamespaceName: string;
        /**
         * 源实例仓库名称
         * @example `test-repo-local`
         */
        LocalRepoName: string;
        /**
         * 同步方向，取值：
         * - `FROM`：源实例同步到目标实例
         * - `TO`：目标实例同步到源实例
         * @example `FROM`
         */
        SyncDirection: string;
        /**
         * 是否为跨账号同步镜像，取值：
         * - `true`：跨账号同步镜像
         * - `false`：同账号同步镜像
         * 默认值：`false`
         * @example `true`
         */
        CrossUser: boolean;
    }[];
}
