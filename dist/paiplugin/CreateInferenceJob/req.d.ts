export interface CreateInferenceJobRequest {
    /**
     * 请求参数的主体信息。
     */
    "body"?: {
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
         * 预测数据路径。
         * @example `https://bucket.region.aliyuncs.com/folder/`
         */
        DataPath: string;
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
         * 用户配置。
         * @example `{}`
         */
        UserConfig: string;
    };
}
