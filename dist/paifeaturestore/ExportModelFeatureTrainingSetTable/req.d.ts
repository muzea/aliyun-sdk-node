export interface ExportModelFeatureTrainingSetTableRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 模型特征ID，可从接口ListModelFeatures获取。
     * @example `3`
     */
    "ModelFeatureId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * Label输入配置。
         */
        LabelInputConfig: {
            /**
             * 分区列表。
             */
            Partitions: any;
            /**
             * 事件时间。
             * @example `2022-07-02 00:00:00`
             */
            EventTime: string;
        };
        /**
         * 特征视图配置映射表。
         */
        FeatureViewConfig: any;
        /**
         * 训练集配置。
         */
        TrainingSetConfig: {
            /**
             * 分区列表。
             */
            Partitions: any;
        };
    };
}
