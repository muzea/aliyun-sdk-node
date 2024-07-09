export interface BackflowFeatureConsistencyCheckJobDataRequest {
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 特征一致性检查任务配置ID。如何获取配置ID，请参见[ListFeatureConsistencyCheckJobConfigs](~~2557567~~)。
         * @example `4`
         */
        FeatureConsistencyCheckJobConfigId: string;
        /**
         * 实例ID。如何获取实例ID，请参见[ListInstances](~~2411819~~)。
         * @example `pairec-cn-********`
         */
        InstanceId: string;
        /**
         * 日志中用户ID。
         * @example `1010`
         */
        LogUserId: string;
        /**
         * 日志中物品ID。
         * @example `9010`
         */
        LogItemId: string;
        /**
         * 日志请求ID。
         * @example `728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77`
         */
        LogRequestId: string;
        /**
         * 场景名称。
         * @example `video-feed`
         */
        SceneName: string;
        /**
         * 分数。
         * @example `[\"{\\\"dbmtl_probs_is_valid_play\\\":0.00032182207107543945,\\\"dbmtl_y_play_time\\\":0.0043269748210906982}\"]`
         */
        Scores: string;
        /**
         * 用户特征。
         * @example `{\"userid\":{\"value\":1010,\"type\":\"string\"},\"click_5_seq\":{\"value\":\"9001;9002;9003;9004;9005\",\"type\":\"string\"}}`
         */
        UserFeatures: string;
        /**
         * 物品特征。
         * @example `[\"{\\\"itemid\\\":{\\\"value\\\":1010,\\\"type\\\":\\\"string\\\"}}\"]`
         */
        ItemFeatures: string;
        /**
         * 日志请求时间（UNIX纪元时间戳）。
         * @example `1693900981465`
         */
        LogRequestTime: number;
    };
}
