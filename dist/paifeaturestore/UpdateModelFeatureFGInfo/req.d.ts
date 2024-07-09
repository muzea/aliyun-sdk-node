export interface UpdateModelFeatureFGInfoRequest {
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
         * fg.json文件配置内容。
         * @example `{"features": [{"feature_name": "item_id","feature_type": "id_feature","value_type": "String","expression": "item:item_id","default_value": "-1024","combiner": "mean","need_prefix": false},{"feature_name": "f1","feature_type": "lookup_feature","value_type": "Integer","map": "item:f1","key": "user:1","default_value": "0","combiner": "mean","need_prefix": false,"needDiscrete": false,"needWeighting": false,"needKey": false}],"reserves": ["f1"]}`
         */
        Content: string;
    };
}
