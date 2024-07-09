export interface CreateFeatureConsistencyCheckJobRequest {
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 实例ID。如何获取实例ID，请参见[ListInstances](~~2411819~~)。
         * @example `pairec-cn-********`
         */
        InstanceId: string;
        /**
         * 特征一致性检查任务配置ID。如何获取配置ID，请参见[ListFeatureConsistencyCheckJobConfigs](~~2557567~~)。
         * @example `3`
         */
        FeatureConsistencyCheckJobConfigId: string;
        /**
         * 运行环境：
         * - Daily：日常环境
         * - Pre：预发环境
         * - Prod：生产环境
         * @example `Pre`
         */
        Environment: string;
        /**
         * 采样运行时长（单位：分钟）。
         * @example `10`
         */
        SamplingDuration: number;
    };
}
