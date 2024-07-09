export interface ListRepoSyncTaskResponse {
    /**
     * 请求ID
     * @example `7640819A-FB5B-4E25-A227-97717F62****`
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
    TotalCount: string;
    /**
     * 同步任务列表
     */
    SyncTasks: {
        /**
         * 修改时间
         * @example `1572839133000`
         */
        ModifedTime: number;
        /**
         * 同步规则ID
         * @example `crsr-7lph66uloi6h****`
         */
        SyncRuleId: string;
        /**
         * 同步任务ID
         * @example `rst-4kfd7fk6pohk****`
         */
        SyncTaskId: string;
        /**
         * 任务状态
         * @example `SUCCESS`
         */
        TaskStatus: string;
        /**
         * 创建时间
         * @example `1572839126000`
         */
        CreateTime: number;
        /**
         * 批量层同步任务ID
         * @example `15DEEB56-9271-4FDD-AC4D-C3A5CC2C****`
         */
        SyncBatchTaskId: string;
        /**
         * 是否为跨账号同步镜像，取值：
         * - `true`：跨账号同步镜像
         * - `false`：同账号同步镜像
         * 默认值：`false`
         * @example `true`
         */
        CrossUser: boolean;
        /**
         * 同步传输加速
         * @example `true`
         */
        SyncTransAccelerate: boolean;
        /**
         * 触发策略，取值：
         * - `PASSIVE`：自动触发同步
         * - `INITIATIVE`：手动触发同步
         * 默认值：`PASSIVE`
         * @example `PASSIVE`
         */
        TaskTrigger: string;
        /**
         * 来源镜像
         */
        ImageFrom: {
            /**
             * 仓库命名空间
             * @example `test`
             */
            RepoNamespaceName: string;
            /**
             * 实例ID
             * @example `cri-kmsiwlxxdcva****`
             */
            InstanceId: string;
            /**
             * 镜像TAG
             * @example `v0.1`
             */
            ImageTag: string;
            /**
             * 仓库名称
             * @example `test`
             */
            RepoName: string;
            /**
             * 地区ID
             * @example `cn-shanghai`
             */
            RegionId: string;
        };
        /**
         * 目标镜像
         */
        ImageTo: {
            /**
             * 仓库命名空间
             * @example `test`
             */
            RepoNamespaceName: string;
            /**
             * 实例ID
             * @example `cri-k77rd2eo9zttneqo`
             */
            InstanceId: string;
            /**
             * 镜像TAG
             * @example `v0.1`
             */
            ImageTag: string;
            /**
             * 仓库名称
             * @example `test`
             */
            RepoName: string;
            /**
             * 地区ID
             * @example `cn-shenzhen`
             */
            RegionId: string;
        };
        /**
         * 是否自动链接
         * @example `true`
         */
        CustomLink: boolean;
    }[];
}
