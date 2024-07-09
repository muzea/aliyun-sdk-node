export interface CreateInferenceJobResponse {
    /**
     * 返回数据。
     */
    Data: {
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
         * 预测数据路径。
         * @example `https://bucket.region.aliyuncs.com/folder/`
         */
        DataPath: string;
        /**
         * 关联人群ID，如果任务失败则人群无效。
         * @example `bdb0b117-3354-4ceb-ba75-e022dd9370d8`
         */
        GroupId: string;
        /**
         * 预测任务日志。
         * @example `Error: Missing Column.`
         */
        History: string;
        /**
         * 预测任务ID。
         * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
         */
        Id: string;
        /**
         * 预测任务名称。
         * @example `VIP客户`
         */
        Name: string;
        /**
         * 备注。
         * @example `充值大于一万`
         */
        Remark: string;
        /**
         * 预测任务状态。
         * - 0: 队列中。
         * - 1: 已提交。
         * - 2: 运行中。
         * - 3: 成功。
         * - 4: 失败。
         * @example `3`
         */
        Status: number;
        /**
         * 输出数据路径，需要为空目录。
         * @example `https://bucket.region.aliyuncs.com/folder/`
         */
        TargetPath: string;
        /**
         * 关联训练任务。
         * @example `123`
         */
        TrainingJobId: string;
        /**
         * 更新时间 (UTC+8)。
         * @example `2020-01-01 12:00:00`
         */
        UpdatedTime: string;
        /**
         * 用户配置。
         * @example `{}`
         */
        UserConfig: string;
    };
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: number;
    /**
     * 错误信息。
     * @example `OK`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `f8651828-609d-4de8-ab49-ab781d7fd85a`
     */
    RequestId: string;
}
