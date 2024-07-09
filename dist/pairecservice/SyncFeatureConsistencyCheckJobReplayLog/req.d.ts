export interface SyncFeatureConsistencyCheckJobReplayLogRequest {
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 特征一致性检查任务配置ID。如何获取配置ID，请参见[ListFeatureConsistencyCheckJobConfigs](~~2557567~~)。
         * @example `3`
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
         * 日志中请求ID。
         * @example `728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77`
         */
        LogRequestId: string;
        /**
         * 场景名称。
         * @example `video-feed`
         */
        SceneName: string;
        /**
         * 日志请求时间（UNIX纪元时间戳）。
         * @example `1693900981465`
         */
        LogRequestTime: number;
        /**
         * 生成特征。
         * @example `week_day:1 | userid:3 | itemid:9001 | cate:cat1 | click_5_seq__cate:cat1`
         */
        GeneratedFeatures: string;
        /**
         * 上下文特征。
         * @example `[{\"Value\":{\"FloatFeature\":0.1}}]`
         */
        ContextFeatures: string;
        /**
         * 原始特征。
         * @example `author__kv_city_expr_cnt_15d：北京市 | tem__min_age_15d:28`
         */
        RawFeatures: string;
    };
}
