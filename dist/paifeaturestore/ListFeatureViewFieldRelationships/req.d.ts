export interface ListFeatureViewFieldRelationshipsRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 特征视图ID，可从接口ListFeatureViews获取。
     * @example `4`
     */
    "FeatureViewId": string;
    /**
     * 特征字段名称。
     * @example `user_id`
     */
    "FieldName": string;
}
