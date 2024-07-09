export interface ListFeatureViewRelationshipsRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 特征视图ID，可从接口ListFeatureViews获取。
     * @example `3`
     */
    "FeatureViewId": string;
}
