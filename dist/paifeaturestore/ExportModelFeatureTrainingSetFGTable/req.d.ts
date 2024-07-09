export interface ExportModelFeatureTrainingSetFGTableRequest {
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
         * 导出训练样本FG表配置
         */
        TrainingSetFgConfig: {
            /**
             * 分区列表。
             */
            Partitions: any;
            /**
             * fg.json文件名称。
             * @example `rank_v1_fg.json`
             */
            FgJsonName: string;
            /**
             * jar包文件名称。
             * @example `fg_on_odps-1.3.60-jar-with-dependencies.jar`
             */
            JarName: string;
        };
    };
}
