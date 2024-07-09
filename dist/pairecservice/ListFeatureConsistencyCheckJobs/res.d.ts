export interface ListFeatureConsistencyCheckJobsResponse {
    /**
     * 请求ID。
     * @example `A04CB8C0-E74A-5E83-BC61-64D153574EC7`
     */
    RequestId: string;
    /**
     * 总个数。
     * @example `10`
     */
    TotalCount: string;
    /**
     * 特征一致性检查任务列表。
     */
    FeatureConsistencyCheckJobs: {
        /**
         * 特征一致性检查任务ID。
         * @example `4`
         */
        FeatureConsistencyCheckJobId: string;
        /**
         * 特征一致性检查配置ID。
         * @example `5`
         */
        FeatureConsistencyCheckJobConfigId: string;
        /**
         * 特征一致性检查任务配置名称。
         * @example `feature_consistency_check_1`
         */
        FeatureConsistencyCheckJobConfigName: string;
        /**
         * 开始时间。
         * @example `2021-12-15T23:24:33.132+08:00`
         */
        GmtStartTime: string;
        /**
         * 结束时间。
         * @example `2021-12-15T23:24:33.132+08:00`
         */
        GmtEndTime: string;
        /**
         * 任务状态。可能值为：
         * - ToRun：待运行。
         * - Running：运行中。
         * - Success：成功。
         * - Failure：失败。
         * - Stopped：停止或已取消。
         * @example `Running`
         */
        Status: string;
        /**
         * 配置信息。
         * @example `{}`
         */
        Config: string;
        /**
         * 日志信息。
         */
        Logs: string[];
    }[];
}
