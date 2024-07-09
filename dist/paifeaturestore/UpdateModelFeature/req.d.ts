export interface UpdateModelFeatureRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 模型特征ID，可从接口ListModelFeatures获取。
     * @example `4`
     */
    "ModelFeatureId": string;
    /**
     * 请求Body。
     */
    "body"?: {
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
             * @example `gender`
             */
            Name: string;
            /**
             * 特征别名。
             * @example `sex`
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
