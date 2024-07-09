export interface CreateTrainingJobRequest {
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
         * 训练数据路径。
         * @example `https://bucket.region.aliyuncs.com/folder/`
         */
        DataPath: string;
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
         * 用户配置，用于设置start\_date、end\_date等参数，划定建模数据的时间范围。
         * @example `{
              "start_date": "20210101",
              "end_date": "20210131"
        }`
         */
        UserConfig: string;
    };
}
