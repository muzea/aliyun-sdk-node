export interface CreateModelFeatureRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId"?: string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 项目ID，可从接口ListProjects获取。
         * @example `3`
         */
        ProjectId: string;
        /**
         * 模型特征名称。
         * @example `model_feature_1`
         */
        Name: string;
        /**
         * Label表ID，可从接口ListLabelTables获取。
         * @example `4`
         */
        LabelTableId: string;
        /**
         * 特征列表。
         */
        Features: {
            /**
             * 特征视图ID，可从接口ListFeatureViews获取。
             * @example `5`
             */
            FeatureViewId: string;
            /**
             * 特征名称。
             * @example `user_id`
             */
            Name: string;
            /**
             * 特征别名。
             * @example `userid`
             */
            AliasName: string;
            /**
             * 特征类型。
             * ● INT32
             * ● INT64
             * ● FLOAT
             * ● DOUBLE
             * ● STRING
             * ● BOOLEAN
             * ● TIMESTAMP
             * @example `STRING`
             */
            Type: string;
        }[];
        SequenceFeatureViewIds: string[];
    };
}
