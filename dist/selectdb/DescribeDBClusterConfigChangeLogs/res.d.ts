export interface DescribeDBClusterConfigChangeLogsResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 实例ID。
         * @example `selectdb-cn-wny3li00g02`
         */
        DbInstanceName: string;
        /**
         * 实例数字ID。
         * @example `6585`
         */
        DbInstanceId: string;
        /**
         * 集群ID。
         * @example `selectdb-cn-wny3li00g02-be`
         */
        DbClusterId: string;
        /**
         * 任务ID
         * @example `107841167`
         */
        TaskId: number;
        /**
         * 参数变更记录
         */
        ParamChangeLogs: {
            /**
             * 修改记录ID
             * @example `617975`
             */
            Id: number;
            /**
             * 配置项名称
             * @example `cumulative_compaction_rounds_for_each_base_compaction_round`
             */
            Name: string;
            /**
             *
             * 旧参数值。
             * @example `10`
             */
            OldValue: string;
            /**
             *
             * 新参数值。
             * @example `12`
             */
            NewValue: string;
            /**
             * 配置是否已生效
             * @example `false`
             */
            IsApplied: boolean;
            /**
             * 任务创建时间（GMT）。
             * @example `2022-10-11T08:53:32Z`
             */
            GmtCreated: string;
            /**
             * 任务修改时间（GMT）。
             * @example `2024-03-08T10:08Z`
             */
            GmtModified: string;
        }[];
    };
    /**
     * 动态code，暂无使用，请忽略
     * @example `0`
     */
    DynamicCode: string;
    /**
     * 动态消息，暂无使用，请忽略
     * @example `An error occurred while processing your request.`
     */
    DynamicMessage: string;
    /**
     * 访问被拒绝详细信息。
     * @example `failed`
     */
    AccessDeniedDetail: string;
    /**
     * 请求ID。
     * @example `F8900A96-67F7-5274-A41B-7722E1ECF8C9`
     */
    RequestId: string;
}
