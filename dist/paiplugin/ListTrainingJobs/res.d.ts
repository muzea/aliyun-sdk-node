export interface ListTrainingJobsResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 返回查询的训练任务列表的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 返回每页显示的训练任务数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总训练任务数量。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 训练任务列表。
         */
        TrainingJobs: {
            /**
             * 关联算法ID。
             * @example `user_recall`
             */
            Algorithm: string;
            /**
             * 关联运营活动ID。
             * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
             */
            CampaignId: string;
            /**
             * 创建时间 (UTC+8)。
             * @example `2020-01-01 12:00:00`
             */
            CreatedTime: string;
            /**
             * 训练数据路径。
             * @example `https://bucket.region.aliyuncs.com/folder/`
             */
            DataPath: string;
            /**
             * 训练任务日志。
             * @example `Error: Unknown parameter.`
             */
            History: string;
            /**
             * 训练任务Id。
             * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
             */
            Id: string;
            /**
             * 训练任务名称。
             * @example `VIP客户`
             */
            Name: string;
            /**
             * 备注。
             * @example `充值大于一万`
             */
            Remark: string;
            /**
             * 训练任务状态，可能值：
             * - 0: 队列中。
             * - 1: 已提交。
             * - 2: 运行中。
             * - 3: 成功。
             * - 4: 失败。
             * @example `3`
             */
            Status: number;
            /**
             * 关联训练计划ID。
             * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
             */
            TrainingScheduleId: string;
            /**
             * 更新时间 (UTC+8)。
             * @example `2020-01-01 12:00:00`
             */
            UpdatedTime: string;
            /**
             * 用户配置。
             * @example `{\"end_date\":\"20220408\",\"op_target\":\"sms\",\"start_date\":\"20220101\"}`
             */
            UserConfig: string;
            /**
             * 是否存有特征重要性、模式、决策树等特征信息。
             * @example `true`
             */
            HasModelInfo: boolean;
        }[];
    };
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: number;
    /**
     * 错误信息。
     * @example `""`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `f8651828-609d-4de8-ab49-ab781d7fd85a`
     */
    RequestId: string;
}
